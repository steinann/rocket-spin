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
    0,
    1364.649996235967,
    3052.2800047099595,
    769.159887388349,
    1261.7498982623224,
    3071.8799091726546,
    3079.0899091213946,
    3086.089909046889,
    4953.899929627778,
    4959.569929592313,
    2673.299997873611,
    2778.6499965936014,
    2788.8699964433977,
    2796.989996343858,
    2808.5399962216684,
    5352.550007142133,
    5361.230007044977,
    5370.120006933815,
    5376.560006856925,
    5384.1200067773525,
    7179.410034805544,
    8187.410022541887,
    9961.770037122078,
    9966.32003702224,
    11239.410027131446,
    14316.260028257973,
    15247.120053850122,
    15252.300053782768,
    15256.150053769357,
    16010.470036596067,
    16014.040036551662,
    16021.180036485202,
    16025.030036471791,
    16029.790036425002,
    16035.670036323376,
    16043.160036273308,
    16046.940036207445,
    16049.74003613741,
    16060.310036093004,
    16069.480036005385,
    16075.570035927005,
    16080.82003587485,
    16091.110035754748,
    16099.930035650737,
    16108.68003554643,
    16118.410035446293,
    16128.070035323508,
    16138.290035203107,
    16147.460035100587,
    16155.650035031147,
    16168.74003485591,
    16180.850034721203,
    16194.850034646697,
    16206.96003451199,
    16214.730034463115,
    16224.180034428842,
    16236.64003435523,
    16245.180034257479,
    16258.130034126349,
    16267.30003403873,
    16273.74003396929,
    16282.280033856638,
    16292.220033757396,
    16302.580033697195,
    16313.010033555336,
    16320.570033490665,
    16331.210033461459,
    16339.610033370562,
    16348.220033325262,
    16354.590033285327,
    16366.490033239133,
    16378.460033118732,
    16386.30003302545,
    16394.700032912202,
    16403.800032831736,
    16414.860032737262,
    16427.32003266365,
    16435.9300325811,
    16448.46003246308,
    16461.550032347448,
    16469.250032313175,
    16483.040032103665,
    16496.270031951375,
    16508.870031729348,
    16520.84003166855,
    16534.98003146053,
    16551.850031301386,
    16570.190031081445,
    16586.850030884154,
    16599.520030789085,
    16613.520030632622,
    16629.130030490465,
    16644.9500303045,
    16661.120030157275,
    16677.150029979653,
    16696.61002964527,
    16714.88002952934,
    16728.46002938599,
    16743.02002920956,
    16756.250029072173,
    16772.07002892346,
    16786.770028762527,
    16801.120028600104,
    16816.450028479107,
    16828.630028314896,
    16842.84002820403,
    16853.76002810896,
    16867.200027957566,
    16873.780027888723,
    16887.78002770991,
    16902.620027601726,
    16915.500027440496,
    16932.580027304597,
    16947.280027128763,
    16959.530027054258,
    16969.540027081974,
    16977.310026988394,
    16989.000026956208,
    17002.020026817925,
    17018.960026614375,
    17033.030026473112,
    17043.67002636195,
    17054.240026235588,
    17064.390026107438,
    17076.71002591402,
    17089.170025810607,
    17103.66002563388,
    17116.470025494702,
    17128.020025379963,
    17135.51002528519,
    17151.89002513141,
    17165.19002496452,
    17178.560024723418,
    17193.680024594076,
    17208.31002447755,
    17217.48002441228,
    17231.690024316318,
    17244.080024108298,
    17257.170023962863,
    17270.610023774214,
    17280.900023676462,
    17293.640023536987,
    17307.29002342374,
    17317.650023289032,
    17332.49002316595,
    17349.360022977,
    17364.410022862263,
    17379.880022667356,
    17391.50002250821,
    17404.450022391982,
    17417.610022284098,
    17430.560022115715,
    17446.590021938093,
    17463.250021785505,
    17476.620021581657,
    17492.510021388538,
    17510.22002122552,
    17524.99002100528,
    17537.24002086372,
    17548.580020762987,
    17562.370020620532,
    17573.080020494766,
    17586.030020356186,
    17600.24002022297,
    17609.69002011419,
    17622.710019946106,
    17463.320019647486,
    15082.130021020777,
    10339.980026766665,
    3466.260043188937,
    -4723.8099665194695,
    -13725.249967768781,
    -22211.279975339763,
    -31943.799989625804,
    -41100.8500098437,
    -49199.92000572383,
    -56611.58998100459,
    -63634.33998100459,
    -70014.97999183832,
    -75891.12996666132,
    -81350.07995979486,
    -86454.82995598017,
    -92112.29994957148,
    -97742.1199454516,
    -103212.75994865595,
    -108421.10995475946,
    -113358.769927904,
    -117856.12993614374,
    -122131.58993141352,
    -126066.14992134272,
    -129760.67990486322,
    -133123.26988212764,
    -136174.0098914355,
    -138911.28989975154,
    -141438.9898928851,
    -143673.80989067256,
    -145764.00988952816,
    -147665.90989486873,
    -149308.38989441097,
    -150934.34989444911,
    -152301.79989282787,
    -153579.85989658535,
    -154813.11989443004,
    -156009.06989113986,
    -157170.64988438785,
    -158138.25988976657,
    -159177.8298947066,
    -160336.74989907444,
    -161525.41989581287,
    -162783.10989825428,
    -164110.2398993224,
    -165643.1698910445,
    -167270.17988459766,
    -169060.4998766631,
    -171043.38988177478,
    -173260.5698801726,
    -175661.28988711536,
    -178289.5798880309,
    -181164.19988696277,
    -184167.12989489734,
    -187471.1299006194,
    -190974.9098841399,
    -194703.3198954314,
    -198585.86989466846,
    -202482.55988948047,
    -206603.24988810718,
    -210792.46988932788,
    -215221.36989466846,
    -219858.79987590015,
    -224844.1298891753,
    -229836.73990122974,
    -235077.14991252124,
    -240507.6099192351,
    -245988.67991511524,
    -251514.96993128955,
    -257166.69993846118,
    -262501.9599787444,
    -267971.4100176543,
    -273525.6300608367,
    -278907.7900530547,
    -284280.5700709075,
    -289614.5700709075,
    -294956.41008250415,
    -300285.51008860767,
    -305668.9301134795,
    -311254.86012522876,
    -316756.58012263477,
    -322166.67013041675,
    -327118.4701258391,
    -332480.26010768116,
    -337786.82012049854,
    -343010.57012812793,
    -348348.0001322478,
    -353611.0901362151,
    -358880.27013270557,
    -364020.0201288909
]

const playButton = document.getElementById("play") as HTMLButtonElement
const barInsideDiv = document.getElementById("bar_inside") as HTMLDivElement
const barDiv = document.getElementById("bar") as HTMLDivElement
const speedButton = document.getElementById("speed") as HTMLButtonElement
const degreesPerSecondSpan = document.getElementById("degrees-per-second") as HTMLSpanElement

/*const csv = await getCSV()
const gyroscopeX = csv.data.get("IMU X Gyroscope")!

const summedGyroX = sumArr(gyroscopeX)
const shortGyroX = shortenArray(summedGyroX, 256)
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