export default function toolTip(name,text,classifier) {
    if (document.getElementById(classifier)===null) {
        console.log("duo chicken")
        const k = document.createElement("div");
        k.style.width = "100px"
        k.style.position = "absolute";
        k.style.left = "50px"
        k.style.top = "-50px";
        k.style.background = "#fff";
        const f = document.createElement("h");
        f.appendChild(document.createTextNode(name))
        f.id = `${classifier}title`
        const l = document.createElement('p')
        l.style.lineHeight = "10px"
        l.style.fontSize = "10px"
        l.style.margin = '1px'
        l.id = `${classifier}body`
        l.appendChild(document.createTextNode(text))
        k.id = classifier
        k.appendChild(f)
        k.appendChild(l)

        k.style.visibility = 'hidden'

        return k
    }
    else{
        const k = document.getElementById(classifier)
        const f = document.getElementById(classifier+"title")
        const l = document.getElementById(classifier+"body")
        console.log(classifier+"title")
        console.log(k)
        console.log(f)
        console.log(f.childElementCount)
        f.innerHTML = name
        l.innerHTML = text

        return k
    }
}