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
//function to check email is valid or not
function IsValidEmail(email){
    //this is Js email regular expression for checking valid email
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); 
}
//funtion to check all text boxes have required inputs
function checkRequired(inputArray){
    //this high order array function 
    inputArray.forEach(function(input){
        if (input.value === ""){
        //same output showerror (input,input.id+ "is required")
            showError(input,`${getFieldId(input)} is required`)
        }
        else{
            showSuccess(input);
        }
    });
} 
//function to get the id of the field in uppercase
function getFieldId(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);

}
//Function to check length 
function checkLength(input,min,max){
    if (input.value.length < min){
        showError(input,`${getFieldId(input)} required min ${min} characters`);
    }else if (input.value.length > max){
        showError(input,`${getFieldId(input)} required max ${max} characters`);
    }else{
        showSuccess(input);
    }

}
//confirm password funtion to check both passwords input are same
function checkPasswordMatch(input1,input2){
    if (input1.value !== input2.value){
        showError(input2,"passwords do not match")
    }
}
//Event listners  
// active submit button
//create event listner
form.addEventListener("submit", function(e) {
    //prevent page from reloading on submit
    e.preventDefault();

    checkRequired([username,Email,password,con_password])
    checkLength(username,3,10)
    checkLength(password,6,30);
    checkPasswordMatch(password,con_password)
 
});
