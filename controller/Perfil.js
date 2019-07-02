const idPerfil = localStorage.getItem("perfil");
const email = sessionStorage.getItem("@email");
var Perfil = {};

import "../webComponent/psComentario.js";
import {LikeApi} from "../model/curtiuModel.js";

async function api() {
    const url = "http://localhost:8080/api/v1/perfilDisciplinas/" + idPerfil;
        try {
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type" : "application/json",
                    "Cache-Control" : "no-cache",
                    "Authorization" : `Bearer ${sessionStorage.getItem("@token")}` 
                },
                mode: 'cors'
            }); 
            if (!response.ok){
                throw response;
            }

            Perfil = await response.json();
        } catch (error) {
            const e = error.json();
            alert(e.message);
            sessionStorage.setItem("@token","");
            sessionStorage.setItem("@email","");
            setInterval(window.location.assign("../view/index.html"));
        }
}

async function render() {
    await api();
    const nome = document.getElementById("nome");
    const id = document.getElementById("id");
    const likes = document.getElementById("likes");
    nome.innerHTML = "Nome: " + Perfil.disciplina.nome;
    id.innerHTML = "Id: " + Perfil.disciplina.id;
    likes.innerHTML = "Numero de likes: " + Perfil.numeroLikes;

    comment();
}

function comment() {
    Perfil.comentarios.map(c => {
        console.log(c);
        let html = `<ps-comentario nome=${c.usuario.primeiroNome} texto=${c.comentario} data = ${c.data_hr} id =${c.id} ></ps-comentario>`;
        document.getElementById("com").innerHTML += html;
    });
}

render();
document.getElementById("btnCurtir").onclick = () => {
    LikeApi(idPerfil, email).then(() => {
        render();
    })
};