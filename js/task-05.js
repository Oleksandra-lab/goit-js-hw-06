const userName = document.querySelector("#name-input");
const helloUser = document.querySelector("#name-output");
// console.log(userName);

userName.addEventListener("input", (evt) => {
  if(evt.currentTarget.value === ""){
    helloUser.textContent = "Anonymous"
  }else {
    helloUser.textContent = evt.currentTarget.value;
  }
    
});

// function onInput(evt){
//     console.log(evt.currentTarget.value);
// }