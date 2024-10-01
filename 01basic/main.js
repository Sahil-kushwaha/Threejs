import * as THREE from 'three';

const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color:'red'})

const cubeMesh = new THREE.Mesh(
        cubeGeometry,
        cubeMaterial
)

scene.add(cubeMesh)

// initialize the camera
const camera = new THREE.PerspectiveCamera(75 ,
  window.innerWidth/window.innerHeight,
0.1,
30)

// all the stuff at same coordiante (0,0,0) so we position the camera

camera.position.z=5;
// we can add camera to scene bcz camera is also a 3D obj
// scene.add(camera)

const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)

console.log(scene)


// Is it neccessary to add camera to the scene?

// The camera does not need to be added to the scene for it to function. You can create a camera and use it to render the scene without adding it to the scene graph.

// Why Add It?: Adding the camera to the scene can be useful in certain situations:

// Hierarchical Transformations: If you want the camera to move with other objects, adding it to the scene allows you to group it with other objects and apply transformations collectively.
// Debugging and Visualization: It can be helpful for debugging purposes to see the camera’s position and orientation within the scene.