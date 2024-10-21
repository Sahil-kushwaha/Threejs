import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Pane } from "tweakpane";

// initialize the pane
const pane = new Pane();

// initialize the scene
const scene = new THREE.Scene();
// const sceneColor = new THREE.Color("white")
// scene.background = sceneColor

//A fog instance defining the type of fog that affects everything rendered in the scene
// const fog = new THREE.Fog(0xffffff,1,10)
// scene.fog=fog;

// initialize the geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const torusGeo = new THREE.TorusKnotGeometry(0.5,0.15,100,16)
const planeGeo = new THREE.PlaneGeometry(1,1)

// initialize the material

// const material = new THREE.MeshBasicMaterial()
// material.color = new THREE.Color("#00ff00") ;
// material.transparent = true;
// material.opacity=0.5
// we use side property of material set to doubleside so that plane can be seen from both side
// material.side = THREE.DoubleSide

// environment reacting material
const material = new THREE.MeshLambertMaterial()
const material2 = new THREE.MeshPhongMaterial()
const color = new THREE.Color(0x049ef4)
material2.color = color
material2.shininess =200
// const material3 = new THREE.MeshStandardMaterial();
// material3.color = new THREE.Color(0x00ff00)
// MeshPhysicalMaterial is same as MeshStandardMaterial but there is some extra property meshphysicalmaterial have
const material3 = new THREE.MeshPhysicalMaterial();
material3.color = new THREE.Color(0x00ff00)


//  configure tweakpan
pane.addBinding(material2,'shininess',{
  min:0,
  max:300
})

pane.addBinding(material3,'metalness',{
   min:0,
   max:1,
   step:0.01
})
pane.addBinding(material3,'roughness',{
   min:0,
   max:1,
   step:0.01
})
// only work with meshphysical material
pane.addBinding(material3,'reflectivity',{
    min:0,
    max:1,
    step:0.01
})

pane.addBinding(material3,'clearcoat',{
  min:0,
  max:1,
  step:0.01
})

// initialize the mesh

const mesh = new THREE.Mesh(geometry, material);

const mesh2 = new THREE.Mesh(torusGeo,material2);
mesh2.position.x = 1.5

const planeMesh = new THREE.Mesh(torusGeo,material3)
planeMesh.position.x = -1.5

scene.add(mesh);
scene.add(mesh2)
scene.add(planeMesh)

// initialise the light
const ambLight = new THREE.AmbientLight(0xffffff,0.3)
scene.add(ambLight)

const pointLight1 = new THREE.PointLight(0xffffff,3)
pointLight1.position.set(1,2,1);
scene.add(pointLight1)
const sphereSize = 1;
const pointLight1Helper = new THREE.PointLightHelper( pointLight1, sphereSize );
scene.add( pointLight1Helper );

    // light for standard material
const pointLight2 = new THREE.PointLight(0xffffff,3)
pointLight2.position.set(-1,2,1);
scene.add(pointLight2)
const pointLight1Helper2 = new THREE.PointLightHelper( pointLight2, sphereSize );
scene.add( pointLight1Helper2 );


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
