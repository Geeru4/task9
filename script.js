window.addEventListener("beforeunload",(event)=>{let username = document.querySelector("#username");let email = document.querySelector("#email");let password = document.querySelector("#password");
    window.localStorage.setItem("username",username.value);
    window.localStorage.setItem("email",email.value);
    window.localStorage.setItem("password",password.value);  
})
document.addEventListener("DOMContentLoaded",(event)=>{let username = document.querySelector("#username");let email = document.querySelector("#email");let password = document.querySelector("#password");
    username.value = window.localStorage.getItem("username");
    email.value = window.localStorage.getItem("email");
    password.value = window.localStorage.getItem("password");
})
document.addEventListener("submit",(event)=>{
    window.localStorage.clear();
    username.value = "";
    email.value = "";
    password.value = "";
})
