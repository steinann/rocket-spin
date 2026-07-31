import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { arrValueSafe, avgAt, getCSV, getPassesArray, shortenArray, smoothArray, sumArr } from './parser';
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
    0,
    1117.5500231608744,
    2380.560021303593,
    2392.8100213557473,
    2711.5900104790917,
    3730.789986640214,
    3738.629986539482,
    3751.7899865061036,
    5078.079977273941,
    5087.389977194369,
    5096.34997703135,
    5589.149970844388,
    5597.829970762134,
    5616.659970968962,
    5630.5199708640575,
    7482.2299334034315,
    7493.429933294653,
    7510.299933336674,
    7523.809933319687,
    7532.349933214485,
    8870.259939126669,
    9578.239923186598,
    11430.299906872211,
    11440.239906750618,
    12359.829888977109,
    14632.729873679576,
    15208.899855241178,
    15218.069855123756,
    15225.20985495299,
    15861.719846159218,
    15869.839846059678,
    15885.939846187828,
    15903.509845823048,
    15911.839845813809,
    15922.479845717548,
    15933.53984557837,
    15941.79984550923,
    15948.799845442174,
    15959.719845272599,
    15969.44984513521,
    15980.789845034478,
    15993.10984495282,
    16003.32984483987,
    16013.129844777284,
    16026.709844663737,
    16036.4398445487,
    16049.529844447969,
    16062.619844302533,
    16074.799844168125,
    16088.519844032822,
    16104.409843884407,
    16119.739843748508,
    16136.889843538402,
    16147.109843418,
    16158.65984328836,
    16169.579843118785,
    16179.519843041895,
    16187.849842965601,
    16201.289842791854,
    16213.189842693506,
    16222.639842577277,
    16232.089842423795,
    16238.179842397569,
    16250.079842314122,
    16262.04984218627,
    16271.569842100142,
    16279.409842029212,
    16289.76984194666,
    16298.79984179884,
    16309.64984166622,
    16321.549841493366,
    16335.059841334818,
    16344.789841175078,
    16353.819841094313,
    16363.409841030834,
    16371.319840967653,
    16379.999840922652,
    16390.429840825498,
    16403.869840674102,
    16414.439840584993,
    16427.039840474725,
    16443.13984030485,
    16456.99984012544,
    16468.899840027094,
    16477.1598399207,
    16492.629839748144,
    16507.25983952731,
    16520.83983937651,
    16537.21983921528,
    16552.479839086533,
    16570.609838984907,
    16585.30983878672,
    16598.609838731587,
    16615.619838617742,
    16631.649838469923,
    16651.389838315547,
    16668.399838134646,
    16684.70983800292,
    16700.389837779105,
    16719.919837504625,
    16736.99983739853,
    16756.17983724922,
    16773.39983704686,
    16787.469836890697,
    16800.27983674407,
    16813.99983665347,
    16824.919836603105,
    16837.659836411476,
    16851.30983622372,
    16866.499836057425,
    16882.599835947156,
    16905.279835775495,
    16921.86983563006,
    16937.68983542919,
    16949.44983534515,
    16964.919835150242,
    16978.21983488649,
    16992.149834752083,
    17004.18983461708,
    17016.649834558368,
    17030.57983441651,
    17040.23983424157,
    17051.929834105074,
    17066.139833949506,
    17081.399833783507,
    17095.74983368069,
    17110.02983355522,
    17124.51983344555,
    17136.69983330369,
    17151.819833151996,
    17170.719832986593,
    17188.77983277291,
    17203.40983260423,
    17217.829832479358,
    17232.949832372367,
    17249.049832209945,
    17263.119832105935,
    17278.169831991196,
    17288.459831871092,
    17303.92983175814,
    17316.599831596017,
    17334.51983141899,
    17346.979831278324,
    17358.73983115703,
    17375.399830900133,
    17389.189830727875,
    17405.569830574095,
    17420.479830354452,
    17432.729830279946,
    17443.50983015448,
    17456.03983002901,
    17469.829829908907,
    17486.83982976526,
    17503.149829559028,
    17519.4598293826,
    17536.819829262793,
    17552.989829078317,
    17569.229828886688,
    17584.349828734994,
    17597.859828591347,
    17607.589828535914,
    17622.919828377664,
    17633.559828311205,
    17644.409828193486,
    17653.999828092754,
    17668.55982796848,
    5838.909796215592,
    -105361.20061638206,
    -305009.6757140383,
    -500068.53069450706,
    -699717.0057921633,
    -894775.8607726321,
    -1061272.33509209,
    -1252138.04993584,
    -1451786.5250334963,
    -1649140.1900725588,
    -1848788.665170215,
    -2046142.3302092776,
    -2245790.805306934,
    -2443144.4703459963,
    -2642792.9454436526,
    -2840146.610482715,
    -3037500.2755217776,
    -3234853.94056084,
    -3432207.6055999026,
    -3629561.270638965,
    -3826914.9356780276,
    -4026563.410775684,
    -4226210.555795215,
    -4416656.686410449,
    -4595203.656259082,
    -4758264.456429981,
    -4905867.716561817,
    -5038736.396493457,
    -5160058.926888965,
    -5271339.536996387,
    -5372463.567025684,
    -5464873.576303028,
    -5548106.446176074,
    -5625309.096322559,
    -5694812.725961231,
    -5760251.315804981,
    -5820419.955636524,
    -5878103.245858692,
    -5932935.715829395,
    -5985810.635629199,
    -6039483.485604785,
    -6095042.485604785,
    -6153733.005380176,
    -6216555.975167774,
    -6285554.765145801,
    -6360646.07514336,
    -6441959.965158008,
    -6529575.044503711,
    -6627028.554757617,
    -6734194.984689258,
    -6851003.773995899,
    -6978046.843942188,
    -7115659.424020313,
    -7260238.473947071,
    -7417888.1344695315,
    -7586360.634225391,
    -7763661.394113086,
    -7949064.864816211,
    -8135632.224923633,
    -8330912.974435352,
    -8530491.937570117,
    -8730140.412667774,
    -8927494.077706836,
    -9127142.552804492,
    -9326789.907784961,
    -9524143.572824024,
    -9723792.04792168,
    -9923440.523019336,
    -10120716.418061756,
    -10320364.893159412,
    -10513128.938081287,
    -10712777.413178943,
    -10910131.078218006,
    -11109779.553315662,
    -11309428.028413318,
    -11509076.503510974,
    -11708724.97860863,
    -11906078.643647693,
    -12105727.11874535,
    -12305375.593843006,
    -12505024.068940662,
    -12704672.544038318,
    -12892830.518842243,
    -13092478.993939899,
    -13289692.378980182,
    -13487046.044019245,
    -13686694.5191169,
    -13884048.184155963,
    -14083696.65925362,
    -14281050.324292682
]

const playButton = document.getElementById("play") as HTMLButtonElement
const barInsideDiv = document.getElementById("bar_inside") as HTMLDivElement
const barDiv = document.getElementById("bar") as HTMLDivElement
const speedButton = document.getElementById("speed") as HTMLButtonElement
const degreesPerSecondSpan = document.getElementById("degrees-per-second") as HTMLSpanElement

const csv = await getCSV()
const gyroscopeX = csv.data.get("IMU Y Gyroscope")!

const summedGyroX = sumArr(gyroscopeX)
const shortGyroX = shortenArray(summedGyroX, 256)
console.log(shortGyroX)

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

            currentYaw = lerp(prevYaw, nextYaw, passedTime % 1) //+= (avg * Math.PI * 2 * deltaTime)
            
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