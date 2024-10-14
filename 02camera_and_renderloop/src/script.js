import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh) 

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35, 
  window.innerWidth / window.innerHeight,
  0.1,
  200)


// orthographicCamera()
// const aspectRatio = window.innerWidth/window.innerHeight
// const camera = new THREE.OrthographicCamera(-1*aspectRatio,1*aspectRatio,1,-1,0.2,200)

camera.position.z = 5

// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias:true
})
renderer.setSize(window.innerWidth, window.innerHeight)  
// to fix the ladder/jagged/staircase pattern on the edge of object

renderer.setPixelRatio(window.devicePixelRatio)

//instantiate the controls
const controls = new OrbitControls(camera,canvas)
controls.enableDamping=true
controls.autoRotate= true;
// controls.enableZoom=true;

window.addEventListener('resize',()=>{
  camera.aspect=window.innerWidth/innerHeight
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight)
})
const renderLoop = ()=>{
  // camera.aspect=window.innerWidth/innerHeight
  // camera.updateProjectionMatrix();
  // renderer.setSize(window.innerWidth, window.innerHeight)
  controls.update()
  renderer.render(scene, camera) 
  window.requestAnimationFrame(renderLoop)
  
}

renderLoop();



// Aspect Ratio Definition:

// If the aspect ratio is greater than 1 (wider than tall), the canvas is wider than it is tall. This requires expanding the left and right bounds to accommodate the wider horizontal range.
// If the aspect ratio is less than 1 (taller than wide), the canvas is taller than it is wide. In this case, we need to compress the left and right bounds.

// Aspect ratio ensures that objects don’t appear squished or stretched when displayed on different screen sizes.

// renderer.setSize(window.innerWidth, window.innerHeight);: This ensures that the canvas rendering area matches the new screen size after a resize.