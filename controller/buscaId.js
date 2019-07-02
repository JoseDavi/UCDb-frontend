import "../webComponent/buscarId";

document.getElementById('btnBuscaId').onclick = () => {
    const buscar = document.getElementById("txtBuscarId").value;
    const disciplinas = document.getElementById('idDisciplina');
    disciplinas.setAttribute("query", buscar);
};