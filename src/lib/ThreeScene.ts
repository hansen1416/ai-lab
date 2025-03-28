import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { MathUtils } from "three/src/math/MathUtils.js";

const CAMERA_DISTANCE = 200;
const CameraOffset = new THREE.Vector3(0, 10, CAMERA_DISTANCE);

const BACKGROUND_COLOR = 0x210F37;


let instance: ThreeScene | undefined;

export default class ThreeScene {
	scene!: THREE.Scene;
	camera!: THREE.PerspectiveCamera;
	renderer!: THREE.WebGLRenderer;
	controls!: OrbitControls;
	clock!: THREE.Clock;
	private mixer?: THREE.AnimationMixer;

	constructor(canvas: HTMLCanvasElement, width: number, height: number) {
		if (instance) return instance;

		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
		this.camera.position.copy(CameraOffset);
		this.camera.updateProjectionMatrix();

		this.scene.add(new THREE.AmbientLight(0xffffff, 1));
		this.scene.background = new THREE.Color(BACKGROUND_COLOR);

		const directLight = new THREE.DirectionalLight(0xffffff, 1);
		directLight.position.set(0, 100, 100);
		directLight.castShadow = true;
		directLight.target = new THREE.Object3D();
		directLight.target.position.set(0, 0, 0);

		this.scene.add(directLight);
		this.scene.add(directLight.target);

		this.renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true,
		});
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.renderer.toneMappingExposure = 0.5;

		this.controls = new OrbitControls(this.camera, canvas);
		this.renderer.setSize(width, height);

		this.clock = new THREE.Clock();

		instance = this;
	}

	dispose(): void {
		// Implement cleanup logic if needed
	}

	onFrameUpdate(stats?: { update: () => void }): void {
		this.renderer.render(this.scene, this.camera);
		if (stats) stats.update();
	}

	resetControl(): void {
		this.controls.reset();
	}

	followTarget(elevation = 0, azimuth = 0): void {
		const diva = this.scene.getObjectByName("diva");
		if (!diva || !diva.children[0]) return;

		const objectPosition = new THREE.Vector3();
		diva.children[0].getWorldPosition(objectPosition);

		CameraOffset.x = Math.sin(MathUtils.degToRad(azimuth)) * CAMERA_DISTANCE;
		CameraOffset.y = Math.sin(MathUtils.degToRad(elevation)) * CAMERA_DISTANCE;
		CameraOffset.z = Math.cos(MathUtils.degToRad(azimuth)) * CAMERA_DISTANCE;

		const targetPos = new THREE.Vector3().addVectors(objectPosition, CameraOffset);
		this.camera.position.copy(targetPos);
		this.camera.lookAt(objectPosition);
	}

	setCamera(target: THREE.Object3D, elevation: number, azimuth: number): void {
		const spherical = new THREE.Spherical();
		spherical.radius = CAMERA_DISTANCE;
		spherical.phi = MathUtils.degToRad(elevation);
		spherical.theta = MathUtils.degToRad(azimuth);

		this.camera.position.setFromSpherical(spherical);
		this.camera.position.add(target.position);
		this.camera.lookAt(target.position);
	}

	loadFbx(url: string, name: string = "", position: THREE.Vector3 | undefined = undefined,
		rotation: THREE.Euler | undefined = undefined) {
		// Lazy-load FBXLoader to avoid errors if it's not imported
		// const { FBXLoader } = require("three/examples/jsm/loaders/FBXLoader");
		const fbxLoader = new FBXLoader();

		fbxLoader.load(
			url,
			(object: THREE.Object3D) => {
				this.mixer = new THREE.AnimationMixer(object);
				if (object.animations.length > 0) {
					this.mixer.clipAction(object.animations[0]).play();
				}
				this.scene.add(object);

				object.name = name

				if (position) {
					object.position.copy(position)
				}

				if (rotation) {
					object.rotation.copy(rotation)
				}
			},
			(xhr: ProgressEvent<EventTarget>) => {
				console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
			},
			(error) => {
				console.error(error);
			}
		);
	}

	unload(target: THREE.Object3D): void {
		target.removeFromParent();
		target.traverse((child: any) => {
			// Dispose materials
			if (child.material && !child.material._isDisposed) {
				for (const value of Object.values(child.material) as any[]) {
					if (value?.dispose && !value._isDisposed) {
						value.dispose();
						value._isDisposed = true;
					}
				}
				child.material.dispose();
				child.material._isDisposed = true;
			}
			// Dispose geometry
			if (child.geometry?.dispose && !child.geometry._isDisposed) {
				child.geometry.dispose();
				child.geometry._isDisposed = true;
			}
		});
	}
}
