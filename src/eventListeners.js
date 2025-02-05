import {map} from './map.js'
import miniMenuLoad from "./minimenuload.js";
import bottomOptions from "./bottomOptions.js";
export default function eventListeners() {
    for (let i = 0; i < map.length; i++){
        document.addEventListener('DOMContentLoaded', function(){

        document.getElementById('hitbox'.concat(i.toString())).addEventListener('click', () => bottomOptions(i,'tile'))
        })

    }
}