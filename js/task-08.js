const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();
    
    const {email, password} = evt.currentTarget.elements;
    
    if(!email.value.trim()||!password.value.trim()){
        return alert (`Please fill all fields!`)
    }else{
      const data = {
        email: email.value,
        password: password.value
    } 
    console.log(data); 
    }
    
    evt.currentTarget.reset()
}
