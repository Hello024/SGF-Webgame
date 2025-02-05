import { useState } from 'react';
import {map} from './map';
import hexagon from "./hexagon-svgrepo-com.svg"
import eventListeners from "./eventListeners.js";
import {scale} from './main.js';
import bottomOptions from "./bottomOptions.js";
let setup = false
export default function board(size) {
    const imageAdjustment = 1.42
    const c = map.length
    console.log(map)
    let t = "";
    let relativeDif = scale/300*imageAdjustment
    let points = 150*relativeDif+","+15*relativeDif+" "+258*relativeDif+","+77*relativeDif+" "+258*relativeDif+","+202*relativeDif+" "+150*relativeDif+","+265*relativeDif+" "+42*relativeDif+","+202*relativeDif+" "+42*relativeDif+","+77*relativeDif+" "


    for (let i = 0; i<c; i++){

        t = t+ `<img src = "${hexagon}" width = ${scale}px height = ${scale}px id = "tile${i}" usemap="map${i}" alt = "tile ${i}">
            <svg height="${scale}px" width="${scale}px" xmlns="http://www.w3.org/2000/svg" id ="brick${i}">
            <polygon points="${points}"
             style="fill:white;stroke:purple;stroke-width:3" id ='hitbox${i}'opacity="10"/>
</svg>
    
    <style>#tile${i} {
    pointer-events: none;
    position: absolute;
    top: ${scale*map[i][1]}px;
    left: ${scale*map[i][0]}px;
    height: ${scale*imageAdjustment}px;
    width: ${scale*imageAdjustment}px;
    }
    #brick${i}{
    pointer-events: none;
    position: absolute;
    top: ${scale * map[i][1]}px;
    left: ${scale * map[i][0]}px;
    width: ${scale*imageAdjustment}px;
    height: ${scale*imageAdjustment}px;
    }
    #hitbox${i}{
    pointer-events: auto !important;
    }
    </style>`


    }

    if (setup === false){
        eventListeners(scale)
        setup = true;


    }

    return (t)

}
