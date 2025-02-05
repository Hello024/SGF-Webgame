import showOption from "./showOption.js";

function buildable(tile){
    let k = []
    for (let i = 0; i<tile[6].length; i++){
        k.push(tile[6][i])
    }
    return k
}

export default function tileOptions(tile){

    let makeAble = buildable(tile);
    showOption('actions',makeAble);

}