document.getElementById("btnSair").onclick = () => {
    console.log('ok');
    sessionStorage.setItem("@token","");
    sessionStorage.setItem("@email","");
    setInterval(window.location.assign("../view/index.html"));
};