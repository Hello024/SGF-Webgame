import miscChecks from "./miscChecks.js";
import doesExist from "./doesExist";

export default function bottomOptions(tile,type) {

    const banner = doesExist('bottom-banner','div','fixed',null,'0px','0px','0px')


    banner.style.height = '100px'

    banner.style.backgroundColor = '#008000'

    document.body.appendChild(banner)

    miscChecks(tile)


}