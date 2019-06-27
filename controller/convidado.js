import "../webComponent/Disciplinas.js";
import "../webComponent/psDisciplina.js";

document.getElementById('btn').onclick = () => {
    const buscar = document.getElementById("txtBuscar").value;
    const disciplinas = document.getElementById('ds');
    disciplinas.setAttribute("query", buscar);
};