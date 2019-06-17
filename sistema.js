let $button = document.getElementById("bt");

$button.addEventListener("click", function() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let primeiroNome = document.getElementById("primeiroNome").value;
    let ultimoNome = document.getElementById("ultimoNome").value;

    let login = {

    }

    fetch("http://localhost:8080/api/v1/users/", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type" : "application/json",
                "Cache-Control" : "no-cache"
            },
            mode: 'cors',
            body

    })

})