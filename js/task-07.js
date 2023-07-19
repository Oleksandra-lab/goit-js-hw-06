document.querySelector('body').style.backgroundColor ='#eaf1fad0';
const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text")



function onInput(evt) {
    text.style.fontSize = `${evt.currentTarget.value}px`;
}

fontSizeControl.addEventListener("input", onInput)