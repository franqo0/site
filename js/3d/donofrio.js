//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";



// Obtener el div contenedor por su ID
const cube1Container = document.getElementById("donofrio");


// Obtener las dimensiones del div contenedor
const containerWidth = cube1Container.offsetWidth;
const containerHeight = cube1Container.offsetHeight;
const containerPosition = cube1Container.getBoundingClientRect();


// Crear escena = Cubo FLAT-CUBE
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    15,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.set(0, 0, 200)

camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
});


// Agrega el renderizador Three.js al div contenedor
cube1Container.appendChild(renderer.domElement);


// Luz ambiental
const ambient_light = new THREE.AmbientLight('#FFFFFF', 1)
scene.add(ambient_light)
// Punto de luz
const light = new THREE.PointLight('#FFFFFF', 2, 500)
light.position.set(0, 40, 100)
scene.add(light)


// Carga de modelo en formato GLB
const loader = new GLTFLoader()
loader.load('models/donofrio.glb', (gltf) => {
    const model = gltf.scene


    // Definir variables para el control de rotación del modelo
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

// Agregar un listener de eventos de mouse al renderizador
renderer.domElement.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
});

renderer.domElement.addEventListener('mouseup', () => {
    isDragging = false;
});

renderer.domElement.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    
    const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y
    };

    // Rotar el modelo en función de los movimientos del mouse
    model.rotation.y += deltaMove.x * 0.01;
    model.rotation.x += deltaMove.y * 0.01;

    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
});

// Calcular la posición central del contenedor
const centerX = containerPosition.left + containerWidth / 2;
const centerY = containerPosition.top + containerHeight / 2;

// Calcular la posición del objeto 3D en relación con el centro del contenedor
const modelX = 0; // Ajusta esta posición según sea necesario
const modelY = 0; // Ajusta esta posición según sea necesario

//alert(`Ancho del contenedor: ${(modelX - centerX) / 8.02 + 10}, Alto del contenedor: ${(modelY + centerY) / 4.53}`);

// Escalar el modelo proporcionalmente al ancho del contenedor
    const factorScale = 11;
        model.scale.set(factorScale, factorScale, factorScale);
        model.position.set( 0, 0, 0);

    scene.add(model)
    const animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)


// Rotar modelo
    const factorRotation = -0.005
        model.rotation.x += 0
        model.rotation.y += 0.015
        model.rotation.z += 0
}
    animate();
}, undefined, (error) => {
    console.error(error)
})