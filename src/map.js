

function genMap(size) {
    let map = []
    let c = 0;
    for (let i = 1; i <= size * 2 - 1; i++) {
        for (let b = 1; b < size * 2 - Math.abs(size - i); b++) {

            c += 1
            let y = i * 0.9;
            let x = b + Math.abs(size - i) / 2;
            map.push([x, y, c]);
        }
    }
    return map
}
function genGameMap(size) {
    let gameMap = []

    for (let i = 1; i <= size * 2 - 1; i++) {
        for (let b = 1; b < size * 2 - Math.abs(size - i); b++) {
            let tile = []
            let terrain = ''
            if (b%2 ===0){terrain = ["Plains"]}
            if (b%2 ===1){terrain = ["Mountain"]}
            let build = ["House"]
            let unit = ["Dude"]
            tile.push(terrain, build, unit)
            gameMap.push(tile)
        }
    }
    return gameMap
}
const map = genMap(6);
const gameMap = genGameMap(6)
export {map, gameMap};