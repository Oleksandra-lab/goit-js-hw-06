function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 const textBgColor = document.querySelector('.color')
 const btnChangeColor = document.querySelector('.change-color')
 const body = document.body;

 const changeColor = () => {
  textBgColor.textContent = getRandomHexColor();
  body.style.backgroundColor = textBgColor.textContent;

 }
 btnChangeColor.addEventListener("click", changeColor);