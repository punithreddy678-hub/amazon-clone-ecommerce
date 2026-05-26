// LOGIN

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Login Successful");

        window.location.href = "index.html";

    });

}

// REGISTER

const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Registration Successful");

        window.location.href = "login.html";

    });

}