import {createElement} from "react";
import doesExist from './doesExist.js'
import {gameMap} from "./map.js";

import viteLogo from "/vite.svg";
import toolTip from "./toolTip.js";
export default function displayTerrainMiniTile(tile,ElementId,pos,top,bottom,left,right) {
    const k = doesExist(ElementId+"container", 'div',pos,top,bottom,left,right);
    console.log (tile[1])
    const f = doesExist(ElementId, 'img',pos,top,bottom,left,right);
    const t = toolTip(tile[0],tile[1],ElementId+"tooltip")
    f.src = tile[5];
    k.appendChild(t)
    k.appendChild(f)
    let banner = document.getElementById('bottom-banner')
    if (banner.contains(k)===false){banner.append(k)}
    document.addEventListener('DOMContentLoaded',()=>{f.addEventListener('mouseover',()=> {t.style.visibility='visible'})
        f.addEventListener('mouseout',()=>{t.style.visibility='hidden'})
    });
}