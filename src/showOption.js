import doesExist from './doesExist';
import {rules} from "./rules.js";
import displayMiniTile from './displayMiniTile';
import toolTip from "./toolTip.js";
export default function showOption(type,option) {
    console.log(type);
    console.log(option);
    for (let i = 0; option.length > i; ++i) {
        for (let j = 0; j < rules[1].length; j++) {
            if (option[i]===rules[1][j][0]){
                const k = doesExist(type+i.toString()+"container",'div','fixed',null,'20px',null,50*(i+1)+'px');
                k.style.pointerEvents = "none";
                const p = doesExist(type+i.toString(),'img','fixed',null,'20px',null,50*(i+1)+'px');
                p.src = rules[1][j][3]

                const l = (toolTip("Build "+ rules[1][j][0],"joe",type+i.toString()+ "tooltip"))
                l.style.left = '-50px'
                document.addEventListener('DOMContentLoaded',()=>{p.addEventListener('mouseover',()=> {l.style.visibility='visible'})
                    p.addEventListener('mouseout',()=>{l.style.visibility='hidden'})
                });
                k.append(l)
                k.append(p)
                p.style.pointerEvents = "all"
                document.getElementById('bottom-banner').append(k)




            }
        }

        }
    for (let i = option.length+1; document.getElementById(type+i.toString())!=null; i++){
        console.log( document.getElementById(type+i.toString()))
        document.getElementById(type+i.toString()).remove()
    }
}