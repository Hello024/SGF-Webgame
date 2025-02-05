import {gameMap} from "./map.js";
import {rules} from "./rules.js";
import displayTerrainMiniTile from "./displayTerrainMiniTile.js";
import tileOptions from "./tileOptions.js";
function iterator(tile){
    let ops = []
    console.log(gameMap)
    for (let i = 0; i < 3; i++) {
        console.log("i = "+i)
        for(let b = 0; b < rules[i].length; b++) {
            console.log("b = "+b)

            console.log(gameMap[tile][i][0] +"=="+ rules[i][b][0])
            if (gameMap[tile][i][0] === rules[i][b][0]){
                ops.push(rules[i][b]);
                b = rules[i].length
            }
        }
    }
    return ops;
}
export default function MiscChecks(tile) {
    let ops = iterator(tile)
    console.log("ops"+ ops)
    displayTerrainMiniTile(ops[0])
    tileOptions(ops[0])
}
