function toggle(){
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup=document.getElementById('popup');
    popup.classList.toggle('active');
    
}

let fields = document.querySelectorAll('form > input')
let submitButton = document.querySelector('form > button')


fields = Array.from(fields) // Turn fields into an Array to access the ".every" method.

fields.forEach(field => {
  field.addEventListener('keyup', () => {
    submitButton.disabled = !fields.every(field => field.value);
  })
})

// const submitButton = document.getElementById("submit");
//         const input = document.getElementById("password");
//         input.addEventListener("keyup",(e)=>{
//         const value = e.currentTarget.value;
//         submitButton.disabled = false;
//         if(value === ""){
//             submitButton.disabled = true;
//         }
//     });