export default function doesExist(ElementId,tagName,pos, top, bottom,left,right) {

    console.log(document.getElementById(ElementId))
    if (document.getElementById(ElementId)===null) {
        const k = document.createElement(tagName);
        k.id = ElementId
        if (pos !== null){
            k.style.position = pos
        }
        if (top !== null) {
            k.style.top = top

        }
        if (bottom !== null) {
            k.style.bottom = bottom
        }
        if (right !== null) {
            k.style.right = right
        }
        if (left !== null) {
            k.style.left = left
        }

        else{console.log ('chicken')}
        return k
    }
    else{
        return document.getElementById(ElementId)
    }
}
