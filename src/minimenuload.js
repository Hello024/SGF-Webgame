import {map, gameMap} from './map.js'
import menu from './pixil-frame-0.svg'
import {scale} from './main.js'
import bottomOptions from "./bottomOptions.js";
function closere(o){
    document.body.removeChild(document.getElementById("Menu"+o))
    document.getElementById("closer"+o).removeChild(document.getElementById("closerButton"+o))
    document.body.removeChild(document.getElementById("closer"+o))


}
export default function miniMenuLoad(tile) {
    let p =0
    while (document.getElementById(`Menu${p}`)!== null){
        p++
    }
    const img = document.createElement('img');
    img.src = menu;
    img.alt = `Menu+${p}`;
    img.style.scale = 0.5*scale+"%";
    img.style.position ='absolute'
    img.style.top = map[tile][1]*scale-214+"px"
    img.style.left = map[tile][0]*scale-130+"px"

    img.id = "Menu"+p
    img.style.pointerEvents = 'none'


    const k = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    k.style.position = "absolute"
    k.id = "closer" + p
    k.style.scale = 0.5*scale+"%";
    k.style.top = map[tile][1]*scale-214+"px"
    k.style.left = map[tile][0]*scale-130+"px"
    k.style.width = "500px"
    k.style.height = "500px"
    k.style.pointerEvents = 'none'
    k.style.fill = "GREEN"
    const closerButton = document.createElementNS("http://www.w3.org/2000/svg", "polygon")
    closerButton.setAttribute('points',"0 0 31.35 0 62.7 0 95 0 95 26.4 95 52.8 95 80 63.65 80 32.3 80 0 80 0 53.6 0 27.2 0 0")
    closerButton.setAttribute('fill', '#2962ff');
    closerButton.style.position = 'absolute'
    closerButton.setAttribute('transform',"translate(390,110)")
    closerButton.style.tagName = "closerThing"
    closerButton.style.pointerEvents = 'auto'

    closerButton.id ="closerButton"+p



    k.appendChild(closerButton)
    document.body.appendChild(img);
    document.body.appendChild(k);
    closerButton.addEventListener('click', ()=>{closere(p)});
}