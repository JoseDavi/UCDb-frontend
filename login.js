let $button = document.getElementById("buttonLogin");

$button.addEventListener("click", function() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let login = {
        "email": email,
        "password": password,
    }

    fetch("http://localhost:8080/api/v1/users/", {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type" : "application/json",
                "Cache-Control" : "no-cache"
            },
            mode: 'cors',

    }).then(console.log("logado"))
})