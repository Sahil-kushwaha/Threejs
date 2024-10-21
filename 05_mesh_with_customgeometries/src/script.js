import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

// custom geometry 
// create typeArray to store vertices position Buffergemometry(2d triangle)
const vertices = new Float32Array([
   0,0,0,
   0,2,0,
   2,0,0
])
// (x,y,z) itemSize(the no of value of array associated with vertex) is 3 here 
const bufferattribute = new THREE.BufferAttribute(vertices,3)

const geometry = new THREE.BufferGeometry()
geometry.setAttribute('position',bufferattribute)

// different type of primitive geometry provided by 3js

// const geometry = new THREE.BoxGeometry(1,1,1,5,5,3);
// const geometry = new THREE.SphereGeometry(1,32,9)
// const geometry = new THREE.PlaneGeometry(1,1,3,3);
// const geometry  = new THREE.TorusGeometry(1,)
// const geometry  = new THREE.TorusKnotGeometry(1,0.3)

const triangleMaterial = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
const triangleMesh = new THREE.Mesh(geometry,triangleMaterial)
scene.add(triangleMesh)

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
camera.position.z = 5;

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// render the scene
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
