//access dom 
const form=document.getElementById("form");
const username = document.getElementById("username");
const Email = document.getElementById("Email");
const password = document.getElementById("password");
const con_password=document.getElementById("con_password");

//Functions
//Funtion for update error class name and msg 
function showError(input,msg){
    //Get the parent elemnet of the input field(.form_control)
    const formControl = input.parentElement;
    //here we replace classname from from_control to form_control error
    formControl.className="form_control error";
    //Get the small element to change the error msg 
    const small = formControl.querySelector("small");
    //replace the samll message
    small.innerText = msg;
}   

//Function for update success class 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className="form_control success";

};






//Event listners
// active submit button
//create event listner
form.addEventListener("submit", function(e) {
    //prevent page from reloading on submit
    e.preventDefault();
    // check if username is empty
    if (username.value === ""){
        showError(username,"Username is required");
        
    }
    else{
        showSuccess(username);
    };
    // check if Email is empty
    if (Email.value === ""){
        showError(Email,"Email is required");
            
    }
    else{
        showSuccess(Email);
    };
    // check if password is empty
    if (username.value === ""){
        showError(password,"Password is required");
        
    }
    else{
        showSuccess(password);
    };
    // check if con_password is empty
    if (con_password.value === ""){
        showError(con_password,"Username is required");
            
    }
    else{
        showSuccess(con_password);
    };
});
