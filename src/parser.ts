interface CSV {
    headers: string[]
    data: Map<string,number[]>
}

export async function getCSV() {
    const response = await fetch("assets/ESC2026_BIFROST.csv")
    const result = await response.text()

    const lines = result.split("\n")
    const headers = lines[0].split(",")

    const data = new Map()

    for (const header of headers) {
        data.set(header, [])
    }

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]
        const lineData = line.split(",")

        for (let j = 0; j < lineData.length; j++) {
            const header = headers[j]
            const value = lineData[j]

            data.get(header).push(Number(value))
        }
    }

    const csv: CSV = {
        headers,
        data
    }

    return csv
}

export function smoothArray(csv: CSV, header: string, smoothness: number = 4500) {
    const data = csv.data.get(header)!

    const totalValues = Math.min(smoothness, 50)

    const newArr = new Array(data.length)

    for (let i = 0; i < data.length; i++) {
        const valueArr = new Float32Array(totalValues)

        for (let j = 0; j < totalValues; j++) {
            const index = Math.min(data.length - 1, i + Math.floor(smoothness / totalValues))
            valueArr[j] = data[index]
        }

        valueArr.sort((a,b) => a - b)

        newArr[i] = valueArr[Math.floor(totalValues / 2)]
    }

    return newArr
}

export function shortenArray(data: number[], count: number) {
    const result = new Array(count)

    for (let i = 0; i < count; i++) {
        result[i] = data[Math.min(data.length-1, Math.floor(i * data.length / count))]
    }

    return result
}

export function countPasses(data: number[], smoothed: number[], start: number, end: number): number {
    let count = 0
    let lastValue = data[Math.max(0, start-1)]

    for (let i = start; i < Math.min(data.length, end); i++) {
        const value = data[i]
        const prevVal = data[Math.max(i-1,0)]
        const nextVal = data[Math.min(data.length, i+1)]
        const smoothVal = Math.max(smoothed[i], 0.1)

        if (lastValue < smoothVal && value > smoothVal && value > prevVal && value > nextVal) {
            count += 1
        }
        /*if (value > prevVal && value > nextVal) {
            count += 1
        }*/

        lastValue = value
    }

    return count
}

export function getPassesArray(csv: CSV, data: number[], smoothed: number[]) {
    const times = csv.data.get("Time")!

    const arr: number[] = []

    let totalTime = 0
    let lastTime = 0

    let startIndex = 0

    for (let i = 0; i < times.length; i++) {
        const time = times[i]
        const deltaTime = time - lastTime
        totalTime += deltaTime

        if (totalTime > 1) {
            totalTime = 0

            const passes = countPasses(data, smoothed, startIndex, i)
            arr.push(passes)

            startIndex = i
        }

        lastTime = time
    }

    return arr
}

export function arrValueSafe(arr: number[], i: number) {
    return arr[Math.max(Math.min(i, arr.length - 1), 0)]
}

export function avgAt(arr: number[], i: number, max: number = 10000) {
    const v0 = Math.min(arrValueSafe(arr, i-1), max)
    const v1 = Math.min(arrValueSafe(arr, i), max)
    const v2 = Math.min(arrValueSafe(arr, i+1), max)
    const avg = Math.max((v0 + v1 + v2) / 3, 1)
    return avg
}

export function sumArr(arr: number[]) {
    const newArr: number[] = new Array(arr.length)

    let sum: number = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        newArr[i] = sum
    }

    return newArr
}