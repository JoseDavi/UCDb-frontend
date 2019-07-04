document.getElementById("usuario").innerHTML = "Olá, " + sessionStorage.getItem("@email");
document.getElementById("btnSair").onclick = () => {
    sessionStorage.setItem("@token","");
    sessionStorage.setItem("@email","");
    setInterval(window.location.assign("../view/index.html"));
};