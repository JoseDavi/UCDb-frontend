import {RankLikes} from "../model/RankLikes.js";

document.getElementById('rankLikes').onclick = () => {
    RankLikes();
};

document.getElementById('rankComentarios').onclick = () => {
    localStorage.setItem("perfil", idBusca);
    window.location.href = "../view/perfil.html";
};