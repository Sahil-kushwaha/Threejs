import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// initialize the scene
const scene = new THREE.Scene();

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" ,wireframe:true});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
// const cubeMesh2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
// cubeMesh2.position.x=-2 // this position is relative to the group /parent position in which this mesh get added
// const cubeMesh3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
// cubeMesh3.position.x=2


// Group mesh to make parent child relation
// const group = new THREE.Group();
// group.add(cubeMesh)
// group.add(cubeMesh2)
// group.add(cubeMesh3)
// group.position.y=1
// scene.add(group);
scene.add(cubeMesh)

//manipulating mesh position in 3d space
const v = new THREE.Vector3(0,0,0);
cubeMesh. position.copy(v)
// cubeMesh. position.y=1
// cubeMesh.scale.y=2

//rotation(using Euler angle which describe the orientation and rotation of object in 3d space)
// cubeMesh.rotation.reorder('YXZ')
cubeMesh.rotation.y=THREE.MathUtils.degToRad(90)
cubeMesh.rotation.x=THREE.MathUtils.degToRad(45)
// cubeMesh.rotation.z=THREE.MathUtils.degToRad(90)
console.log(cubeMesh)

// axesHelper is 3d object can be child or parent of any object(which inherit 3D Object baseclass)  
const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)
cubeMesh.add(axesHelper)

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
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;


window.addEventListener('resize', () =>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight);
})

// render the scene
const renderloop = () => {
  controls.update();  
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
