const idPerfil = localStorage.getItem("perfil");
const email = sessionStorage.getItem("@email");
var Perfil = {};

import "../webComponent/psComentario.js";
import {LikeApi} from "../model/curtiuModel.js";
import {ComentarioApi} from "../model/comentarioModel.js";
import {DeleteApi} from "../model/comentarioModel.js";

async function api() {
    const url = "https://ucdbufcgpsoft.herokuapp.com/api/v1/perfilDisciplinas/" + idPerfil;
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
            alert("Você não está logado");
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
    const ncomentarios = document.getElementById("ncomentarios");
    nome.innerHTML = "Nome: " + Perfil.disciplina.nome;
    id.innerHTML = "Id: " + Perfil.disciplina.id;
    likes.innerHTML = "Número de likes: " + Perfil.numeroLikes;
    ncomentarios.innerHTML = "Número de comentarios: " + Perfil.numeroComentarios;
    comment();
}

function comment() {
    document.getElementById("com").innerHTML = "";
    Perfil.comentarios.map(c => {
        if(!c.foiDeletado){
        let html = `<ps-comentario nome=${c.usuario.email} texto=${c.comentario} data = ${c.data_hr} id =${c.id} ></ps-comentario>`;
        if(sessionStorage.getItem("@email") == c.usuario.email){
            html +=  `<button id="buttonDeletar" aux=${c.id}> deletar comentario</button>`
        }
        document.getElementById("com").innerHTML += html;
    }
    });
}

render();
document.getElementById("btnCurtir").onclick = () => {
    LikeApi(idPerfil, email).then(() => {
        render();
    })
};
document.getElementById("btnComentar").onclick = () => {
    let texto = document.getElementById("txtComentar").value;
    ComentarioApi(idPerfil, email, texto).then(() =>{
        window.location.assign("../view/perfil.html");
    })
};
render().then( ()=>{
    if(document.getElementById("buttonDeletar")){
    document.getElementById("buttonDeletar").onclick = () =>{
        let aux = document.getElementById("buttonDeletar").getAttribute("aux");
        DeleteApi(aux).then(() =>{
            window.location.assign("../view/perfil.html");
        })
    }
}
})