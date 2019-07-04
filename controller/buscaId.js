document.getElementById('btnBuscaId').onclick = () => {
    const idBusca = document.getElementById("txtBuscarId").value;
    if(idBusca>96 || idBusca<1){
        alert("Disciplina inexistente");
        window.location.href = "../view/logado.html";
    }else{
    localStorage.setItem("perfil", idBusca);
    window.location.href = "../view/perfil.html";
    }
};