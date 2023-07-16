const validInput = document.getElementById("validation-input");
const validLength = validInput.dataset.length;
validInput.addEventListener("blur", onBlur)

function onBlur(evt) {
    if (evt.currentTarget.value.length === Number(validLength)) {
        validInput.classList.add("valid");
        validInput.classList.remove("invalid");
        return;
    } 
    if(evt.currentTarget.value.length !== Number(validLength)) {
    validInput.classList.add("invalid");
    validInput.classList.remove("valid");
    }
    if (evt.currentTarget.value.length === 0) {
        validInput.classList.remove("valid");
        validInput.classList.remove("invalid");
    }
} 