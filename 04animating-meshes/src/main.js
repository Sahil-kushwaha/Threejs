import * as THREE from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color:"blue",wireframe:true});
const cubemesh = new THREE.Mesh(cubeGeometry,cubeMaterial)
scene.add(cubemesh)

const axeshelper = new THREE.AxesHelper();
scene.add(axeshelper)

const camera = new THREE.PerspectiveCamera(35,window.innerWidth/innerHeight,0.1 , 200);
camera.position.z = 5


const canvas = document.getElementById("canvas");
const controls = new OrbitControls(camera,canvas)
controls.enableDamping =true

const renderer = new THREE.WebGLRenderer({
    canvas:canvas,
    antialias:true
});
renderer.setSize(window.innerWidth,window.innerHeight)


window.addEventListener('resize',()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight)
})

const clock = new THREE.Clock();
let previousTime=0
const renderLoop=()=>{
    const currentTime = clock.getElapsedTime()
    // delta, representing the time elapsed since the last frame. Multiplying the rotation increment by delta ensures that the rotation speed is consistent, regardless of the frame rate. 
    const delta = currentTime-previousTime
    previousTime = currentTime 

   //rotates the cubemesh by 1 degree per unit of delta time around the y-axis.
    // cubemesh.rotation.y += THREE.MathUtils.degToRad(1)*delta*20;
    // cubemesh.rotation.y =  Math.sin(currentTime)+2;
    
    // it scale the cube linearly along x asix
    // cubemesh.scale.x += delta
    //now make ocillation by using sin function
    // cubemesh.scale.x = Math.sin(currentTime)+1
    // cubemesh.scale.y = Math.sin(currentTime)+1
    // cubemesh.scale.z = Math.sin(currentTime)+1

    // manipulate position
    cubemesh.position.x = Math.sin(currentTime)+1

    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(renderLoop)
    
}

renderLoop()




