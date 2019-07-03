import "../webComponent/buscarId.js";
import "../webComponent/psDisciplina.js";

document.getElementById('btnBuscaId').onclick = () => {
    const buscar = document.getElementById("txtBuscarId").value;
    const disciplinas = document.getElementById('idDisciplina');
    disciplinas.setAttribute("query", buscar);
};