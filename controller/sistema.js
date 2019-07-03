let $button = document.getElementById("buttonCadastro");

$button.addEventListener("click", function() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let primeiroNome = document.getElementById("primeiroNome").value;
    let ultimoNome = document.getElementById("ultimoNome").value;

    let login = {
        "email": email,
        "password": password,
        "primeiroNome": primeiroNome,
        "ultimoNome": ultimoNome
    }

    fetch("http://ucdbufcgpsoft.herokuapp.com/api/v1/users/", {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type" : "application/json",
                "Cache-Control" : "no-cache"
            },
            mode: 'cors',
            body: JSON.stringify(login)

    }).then(console.log("ok"))

})