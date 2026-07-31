import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { arrValueSafe, avgAt, getCSV, getPassesArray, shortenArray, smoothArray } from './parser';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

let passesArr = [
        47,
        50,
        51,
        50,
        42,
        35,
        48,
        42,
        40,
        43,
        40,
        32,
        46,
        30,
        27,
        26,
        36,
        33,
        36,
        39,
        30,
        30,
        35,
        26,
        25,
        25,
        23,
        30,
        24,
        22,
        27,
        38,
        40,
        43,
        31,
        12,
        19,
        16,
        9,
        10,
        6,
        7,
        4,
        7,
        2,
        2,
        5,
        8,
        3,
        11,
        7,
        3,
        5,
        9,
        5,
        6,
        6,
        1,
        2,
        1,
        2,
        1,
        1,
        2,
        1,
        1,
        1,
        2,
        1,
        0,
        1,
        3,
        0,
        1,
        0,
        3,
        3,
        5,
        5,
        4,
        10,
        6,
        9,
        3,
        5,
        7,
        6,
        7,
        8,
        7,
        5,
        13,
        7,
        4,
        6,
        8,
        7,
        3,
        4,
        3,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        3,
        1,
        0,
        2,
        2,
        2,
        0,
        0,
        0,
        3,
        0,
        0,
        2,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        2,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        2,
        15,
        10,
        11,
        2,
        6,
        7,
        5,
        5,
        2,
        5,
        3,
        3,
        7,
        3,
        1,
        5,
        4,
        1,
        3,
        3,
        2,
        3,
        1,
        4,
        2,
        2,
        2,
        6,
        7,
        5,
        8,
        8,
        8,
        9,
        8,
        6,
        8,
        6,
        6,
        11,
        12,
        9,
        11,
        5,
        11,
        4,
        2,
        3,
        0,
        1,
        0,
        0,
        1,
        1,
        2,
        3,
        1,
        7,
        4,
        2,
        3,
        2,
        0,
        0,
        3,
        2,
        3,
        4,
        2,
        4,
        2,
        2,
        3,
        23,
        14,
        3,
        6,
        4,
        2,
        2,
        9,
        39,
        22,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]
    let altitudeArr = [
    11.464162872430286,
    11.464162872430286,
    -60.91400054500391,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    44330.8,
    11.464162872430286,
    47.842689236928614,
    -24.787740108121167,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    -60.91400054500391,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    44330.8,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    -24.787740108121167,
    11.464162872430286,
    -24.787740108121167,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    -24.787740108121167,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    44330.8,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    47.842689236928614,
    47.842689236928614,
    47.842689236928614,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    -24.787740108121167,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    -24.787740108121167,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    -24.787740108121167,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    -24.787740108121167,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    -24.787740108121167,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    -24.787740108121167,
    -24.787740108121167,
    11.464162872430286,
    11.464162872430286,
    -24.787740108121167,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    11.464162872430286,
    47.842689236928614,
    157.74799732348094,
    343.5510762882559,
    686.6625354190718,
    1244.3486852330716,
    1878.075526351947,
    2508.2298383928023,
    3131.9129116414665,
    3640.5612461323167,
    4233.238327504432,
    4688.934723574826,
    5045.944838242371,
    5480.705455466956,
    5804.420454694491,
    6071.988710578055,
    6418.059043858625,
    6632.335025642418,
    6926.3499148210885,
    7153.496655721055,
    7386.707311060725,
    7545.733231367156,
    7789.900061535635,
    7956.619440005271,
    8126.655391478181,
    8212.963910139977,
    8388.261576516772,
    8567.274694385009,
    8567.274694385009,
    8750.184012533367,
    8843.160026892536,
    8843.160026892536,
    8937.184309771617,
    9032.283231100428,
    44330.8,
    9032.283231100428,
    9128.485490065776,
    9128.485490065776,
    9128.485490065776,
    9128.485490065776,
    9128.485490065776,
    9032.283231100428,
    9032.283231100428,
    8937.184309771617,
    8937.184309771617,
    8843.160026892536,
    8843.160026892536,
    8750.184012533367,
    8567.274694385009,
    8567.274694385009,
    8388.261576516772,
    8300.159098305854,
    8126.655391478181,
    8041.213640388008,
    7872.854226946016,
    7707.739599729743,
    7545.733231367156,
    7386.707311060725,
    7230.542006741949,
    7001.413434584473,
    6851.922633520391,
    6632.335025642418,
    6488.911882098272,
    6278.020651199624,
    6071.988710578055,
    5870.572721123438,
    5673.547754837079,
    5417.320341071861,
    5229.756467500279,
    4985.47950606813,
    44330.8,
    4515.439798377196,
    4289.004673166116,
    4067.8908002427474,
    3851.8265538621913,
    3640.5612461323167,
    3382.8765016111442,
    3131.9129116414665,
    2887.2908557236815,
    2695.9247161791814,
    2461.8615111909203,
    2233.2374421781415,
    1965.6838079663798,
    1748.0884605959973,
    1535.1242099730625,
    1285.3789888777678,
    1081.8686479738103,
    842.9146949209634,
    609.4206740013537,
    381.1153882474476,
    157.74799732348094
]
let rotationArr = [
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2256.59008789062,
    -2109.23999023438,
    -1951.4599609375,
    -1787.80004882813,
    -1632.46997070313,
    -1500.93994140625,
    -1380.32995605469,
    -1260.28002929688,
    -1156.75,
    -1065.11999511719,
    -972.580017089844,
    -903.97998046875,
    -822.080017089844,
    -773.359985351562,
    -717.849975585938,
    -680.820007324219,
    -649.039978027344,
    -622.159973144531,
    -613.549987792969,
    -616.77001953125,
    -638.400024414062,
    -671.510009765625,
    -721.559997558594,
    -781.340026855469,
    -836.710021972656,
    -908.460021972656,
    -975.590026855469,
    -1061.33996582031,
    -1157.52001953125,
    -1259.22998046875,
    -1361.84997558594,
    -1467.90002441406,
    -1584.17004394531,
    -1667.68005371094,
    -1789.76000976562,
    -1901.55004882813,
    -2003.75,
    -2099.92993164062,
    -2155.51000976562,
    -2233.07006835938,
    -2289.77001953125,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375,
    -2294.81005859375
]

const playButton = document.getElementById("play") as HTMLButtonElement
const barInsideDiv = document.getElementById("bar_inside") as HTMLDivElement
const barDiv = document.getElementById("bar") as HTMLDivElement
const speedButton = document.getElementById("speed") as HTMLButtonElement
const degreesPerSecondSpan = document.getElementById("degrees-per-second") as HTMLSpanElement

/*const csv = await getCSV()
const gyroscopeX = csv.data.get("IMU Y Gyroscope")!.filter((v) => {return v !== 0})
console.log(gyroscopeX)

//const summedGyroX = sumArr(gyroscopeX)
const shortGyroX = shortenArray(gyroscopeX, 256)
for (let i = 0; i < 180; i++) {
    shortGyroX[i] = -2294.81005859375
}
console.log(shortGyroX)*/

let lastTime = Date.now() / 1000
let passedTime = 0
let isPaused = false
let currentYaw = 0
let currentPitch = Math.PI / 4 + Math.PI / 2 + Math.PI
let justSkipped = false
let speedMult = 1

const minTime = 165
const maxTime = 256
const pitchChangeness = 0.3

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.setClearColor(new THREE.Color(0,0,0))

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight)

const ambientLight = new THREE.AmbientLight(new THREE.Color(0.5,0.5,0.5), Math.PI / 2)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(new THREE.Color(1,1,1), 1)
scene.add(directionalLight)

const skyUniforms = {
    topColor: { value: new THREE.Color(0x87ceeb) },   // Sky blue
    bottomColor: { value: new THREE.Color(0xffffff) }, // Near horizon
    offset: { value: 0 },
    exponent: { value: 0.6 }
};

const skyMaterial = new THREE.ShaderMaterial({
    uniforms: skyUniforms,
    vertexShader: `
    varying vec3 vWorldPosition;
    void main() {
    vec4 worldPosition = modelViewMatrix * vec4(position, 1.0);
    vWorldPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,
    fragmentShader: `
    uniform vec3 topColor;
    uniform vec3 bottomColor;
    uniform float offset;
    uniform float exponent;
    varying vec3 vWorldPosition;
    void main() {
    float h = normalize(vWorldPosition + offset).y;
    gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
    }
`,
    side: THREE.BackSide
});

// Large sphere for sky
const skyGeo = new THREE.SphereGeometry(500, 32, 15);
const sky = new THREE.Mesh(skyGeo, skyMaterial);
scene.add(sky);

// Simple ground plane
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(10000, 10000),
    new THREE.MeshPhongMaterial({ color: 0x228B22 })
);
ground.rotation.x = -Math.PI / 2;
ground.position.set(0,-1000,0)
scene.add(ground);

camera.position.set(100,10,100)
camera.lookAt(new THREE.Vector3(0,0,0))

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(0,0,0)
controls.zoomSpeed = 10
controls.enableZoom = false
controls.enablePan = false

let rocketScene: THREE.Group | undefined = undefined

const loader = new GLTFLoader()
loader.load("assets/rocket.glb", (model) => {
    rocketScene = model.scene
    scene.add(model.scene)

    animate()

    loadRocket()
})

document.body.appendChild(renderer.domElement)
renderer.setSize(window.innerWidth, window.innerHeight)

function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera) {
  const canvas = renderer.domElement;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const needResize = canvas.clientWidth !== width || canvas.clientHeight !== height;
  if (needResize) {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(width, height);
  }
  return needResize;
}

function setPause(paused: boolean) {
    isPaused = paused
    if (isPaused) {
        playButton.className = "play"
    } else {
        playButton.className = "pause"
    }
}

function lerp(a: number,b: number,t: number) {
	return a + (b - a) * t
}

playButton.addEventListener("click", () => {
    if (isPaused && passedTime >= maxTime - minTime - 0.01) {
        passedTime = 0
        justSkipped = true
    }
    setPause(!isPaused)
})
barDiv.addEventListener("click", (e: PointerEvent) => {
    const bounds = barDiv.getBoundingClientRect()
    const mouseTotal = e.clientX - bounds.left
    const mouseMax = bounds.right - bounds.left
    const percent = mouseTotal / mouseMax
    passedTime = lerp(0, maxTime - minTime, percent)
    currentYaw = (passedTime * 3) % (Math.PI * 2)
    justSkipped = true
})
speedButton.addEventListener("click", () => {
    switch (speedMult) {
        case 1:
            speedMult = 2
            break
        case 2:
            speedMult = 4
            break
        case 4:
            speedMult = 8
            break
        case 8:
            speedMult = 16
            break
        case 16:
            speedMult = 1
            break
    }

    speedButton.innerText = speedMult + "x"
})

function animate() {
    const deltaTime = (Date.now() / 1000 - lastTime) * speedMult
    if (!isPaused) passedTime += deltaTime
    if (passedTime > maxTime - minTime) {
        setPause(true)
        passedTime = maxTime - minTime
    }
    if (!document.hasFocus()) {
        setPause(true)
    }

    const percentage = (passedTime / (maxTime - minTime) * 100)
    barInsideDiv.style.width = percentage + "%"

    if (!isPaused || justSkipped) {
        if (rocketScene) {
            const indx = Math.floor(passedTime + minTime)

            //const avg = avgAt(passesArr, indx)

            const prevYaw = arrValueSafe(rotationArr, indx-1)
            const nextYaw = arrValueSafe(rotationArr, indx)

            const diffYaw = nextYaw - prevYaw
            degreesPerSecondSpan.innerText = Math.round(Math.abs(diffYaw / 360)) + " / s"

            currentYaw += diffYaw * deltaTime //+= (avg * Math.PI * 2 * deltaTime)
            
            const altitude = avgAt(altitudeArr, indx)
            const nextAltitude = avgAt(altitudeArr, indx+1)
            const deltaAltitude = nextAltitude - altitude
            const forwardFake = 200
            const targetPitch = Math.PI / 2 + Math.PI + Math.sin(deltaAltitude / forwardFake)
            currentPitch = lerp(currentPitch, targetPitch, deltaTime * pitchChangeness)
            if (justSkipped) {
                currentPitch = targetPitch
            }
            rocketScene.rotation.set(currentPitch, currentYaw, 0, "XYZ")
            //console.log(pitch / Math.PI * 180)
        }
    }

    controls.update()
    resizeRendererToDisplaySize(renderer, camera)
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)

    lastTime = Date.now() / 1000
    justSkipped = false
}


async function loadRocket() {
    if (!passesArr) {
        console.log("Reading CSV...")
        const csv = await getCSV()
        const photometer = csv.data.get("Photometer")!
        console.log("Calculating speed from Photometer...")
        const photometerSmooth = smoothArray(csv, "Photometer", 4500)
        passesArr = getPassesArray(csv, photometer, photometerSmooth)
        console.log(passesArr)
        console.log(photometerSmooth)
    }
    if (!altitudeArr) {
        const csv = await getCSV()
        const pressure = csv.data.get("Pressure")!
        const pressureCompressed = shortenArray(pressure, 256)
        altitudeArr = pressureCompressed.map((n) => {
            return 44330.8 * (1 - Math.pow(n/101.325, 0.190284))
        })
    }
}