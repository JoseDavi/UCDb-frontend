document.getElementById('btnComentar').onclick = () => {
    const buscar = document.getElementById("txtComentar").value;
    const comentarios = document.getElementById('ds');
    disciplinas.setAttribute("query", buscar);
};