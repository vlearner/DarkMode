
if(typeof(Storage) !== "undefined"){
    sessionStorage.setItem()
}

function changeLightMode(bColor, hColor) {
    document.body.style.background = bColor;
    let headingElement = document.getElementById("h1").style.color = hColor;
}  