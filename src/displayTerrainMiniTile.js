import {createElement} from "react";
import doesExist from './doesExist.js'
import {gameMap} from "./map.js";

import viteLogo from "/vite.svg";
import toolTip from "./toolTip.js";
export default function displayTerrainMiniTile(tile) {
    const k = doesExist('selected-image-container', 'div','fixed',null,'20px','20px');
    console.log (tile[1])
    const f = doesExist('selected-image', 'img','fixed',null,'20px','20px');
    const t = toolTip(tile[0],tile[1],'MiniTile-tooltip')
    f.src = tile[5];
    k.appendChild(t)
    k.appendChild(f)
    let banner = document.getElementById('bottom-banner')
    if (banner.contains(k)===false){banner.append(k)}
    document.addEventListener('DOMContentLoaded',()=>{f.addEventListener('mouseover',()=> {t.style.visibility='visible'})
    f.addEventListener('mouseout',()=>{t.style.visibility='hidden'})
    });
}