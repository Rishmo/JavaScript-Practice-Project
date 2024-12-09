const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit', (e) => {
    e. preventDefault(); // prevents refresh

    validateInputs(); // function call
})

const validateInputs = () =>{
    const usernameValue = username.value.trim(); // trim is used to remove left and right spaces
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(usernameValue === ''){
        setError(username, "Username is required"); //function
    }
    else{
        setSuccess(username);
    }


    if(emailValue === ''){
        setError(email, "email is required");
    }
    // else if(!isValidEmail(emailValue)){
    //     setError(email, "Provide a valid Email address.");
    // }
    else{
        setSuccess(email);
    }


    if(passwordValue === ''){
        setError(password, "Password is required");
    }
    else if(passwordValue.length < 8){
        setError(password, "Password must be 8 characters long.");
    }
    else{
        setSuccess(password);
    }


    if(cpasswordValue === ''){
        setError(cpassword, "Please Confirm your Password");
    }
    else if(cpasswordValue !== passwordValue){
        setError(cpassword, "Password not matched.");
    }
    else if(cpasswordValue.length < 8){
        setError(cpassword, "Password must be 8 characters long.");
    }
    else{
        setSuccess(cpassword);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement; // eq username parent = form-container it will go to this and then find span error
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message; // Displays error message

    inputControl.classList.add('error'); // creating class for styling
    inputControl.classList.remove('success'); // remove success class if any
}

const setSuccess = (element) => {
    const inputControl = element.parentElement; // Find parent element (form-container)
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = "";
    inputControl.classList.add('success'); // Add 'success' class for styling
    inputControl.classList.remove('error'); // Remove 'error' class if any
}

// function isvalidEmail(e){

// }