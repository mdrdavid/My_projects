/*const myForm = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById(password); */

// target ids and classes
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
// store the classes and id iside variables

let username = id('username'),
email = id('email'),
password = id('password'),
form = id('form'),

erroMsg = classes('error'),
successIcon = classes('success-icon'),
failureIcon = classes('failure-icon');
// add the submit eventLister to the form
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    /* Here, we are passing the id names, serials of our class names, and passing the message which should be printed 
    when we find an error when the user submits the form.*/
    engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(password, 2, "Password cannot be blank");
});
// create a function which will do all kinds of form validation
//let engine = (id, serial, message) =>{}
//id will target our id 
// serial will terget classes(error class, success and failure)
// message will print a message inside our .error class

//create if statement
let engine = (id, serial, message) =>{
    if(id.value.trim()==""){
        errorMsg[serial].innerHTML= message;
    }
    else {
        errorMsg[serial].innerHTML= "";

    }
}
// For the icons to work properly, add this code: 
let engine = (id , serial, message) =>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML= message;
        id.style.border ="2px solid red"

        // icons
        failureIcon[serial].style.opacity ="1"
        successIcon[serial].style.opacity ="0"
    }
    else{
            errorMsg[serial].innerHTML = "";
            id.style.border = "2px solid green";
            
            // icons
            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";
          }

    }
