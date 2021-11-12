const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

function validate(){
    
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if(username.value.trim()==""){
        alert("Please enter Valid ID");
        return false;
    }

    else if(password.value.trim()==""){
        alert("Please enter Password");
        return false;
    }

    else if(password.value.trim().length<5){
        alert("Password too short");
        return false;
    }

    else if(username.value!='admin'){
        alert("Incorrect Id");
        return false;
    }

    else if(password.value!='admin@10'){
        alert("Incorrect Password");
        return false;
    }
    else if(username.value=='admin' & password.value=='admin@10'){
        alert("Login Succesfully");
        true;
    }

}

