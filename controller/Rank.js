import "../model/RankLikes.js";



document.getElementById('rankLikes').onclick = () => {
    document.getElementById('display').innerText = "";
    let $comments = document.createElement('like-disciplinas');
    $comments.setAttribute('likes', '');
    document.getElementById('display').appendChild($comments);
};
document.getElementById('rankComentarios').onclick = () => {
    document.getElementById('display').innerText = "";
    let $comentario = document.createElement('like-disciplinas');
    $comentario.setAttribute('comments', '');
    console.log($comentario);
    document.getElementById('display').appendChild($comentario);
};