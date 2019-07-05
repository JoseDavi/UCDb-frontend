import {requestGet} from "../model/loginModel.js";
let $button = document.getElementById("buttonLogin");

$button.addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let login = {
        "email": email,
        "password": password,
    }
    requestGet("https://ucdbufcgpsoft.herokuapp.com/api/v1/auth/login",login)
    .then(() => {
        if(sessionStorage.getItem("@token")!= ""){
        window.location.assign("../view/logado.html");
        }
    });
})