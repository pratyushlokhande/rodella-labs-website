import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
let camera, scene, renderer, model;
const loader = new GLTFLoader();
const el = document.getElementById("drone");

export function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    el.clientWidth / el.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  scene = new THREE.Scene();
  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);
  // const spotLight = new THREE.SpotLight(0x29bf12);
  const spotLight = new THREE.SpotLight(0xffffff, 1);
  spotLight.position.set(100, 500, 100);

  spotLight.castShadow = true;

  spotLight.shadow.mapSize.width = el.clientWidth;
  spotLight.shadow.mapSize.height = el.clientHeight;

  spotLight.shadow.camera.near = 500;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 30;

  scene.add(spotLight);

  loader.load("/models/uav/scene.gltf", (gltf) => {
    model = gltf.scene;
    model.scale.set(0.5, 0.5, 0.5);
    // console.log(model.rotation);
    model.position.y = 0.5;
    model.rotation.x = 0.5;
    model.rotation.y = 1;
    scene.add(model);
  });

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(el.clientWidth, el.clientHeight);
  renderer.setAnimationLoop(animate);

  el.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  window.addEventListener("resize", () => {
    const width = el.clientWidth;
    const height = el.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
}

function animate() {
  camera.position.y += Math.sin(Date.now() * 0.001) * 0.01;
  renderer.render(scene, camera);
}
