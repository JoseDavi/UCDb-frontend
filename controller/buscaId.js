document.getElementById('btnBuscaId').onclick = () => {
    const idBusca = document.getElementById("txtBuscarId").value;
    localStorage.setItem("perfil", idBusca);
    window.location.href = "../view/perfil.html";
};