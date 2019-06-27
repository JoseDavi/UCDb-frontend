import {requestGet} from "../model/loginModel.js";
let $button = document.getElementById("buttonLogin");

$button.addEventListener("click", function() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let login = {
        "email": email,
        "password": password,
    }
    requestGet("http://localhost:8080/api/v1/auth/login",login);
})