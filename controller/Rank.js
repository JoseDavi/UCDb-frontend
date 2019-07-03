document.getElementById('rankLikes').onclick = () => {
    if(document.getElementById("rank").shadowRoot != null){
    document.getElementById("rank").shadowRoot.innerHTML = "";
    }
    import("../webComponent/rankLikes.js");
};
document.getElementById('rankComentarios').onclick = () => {
    if(document.getElementById("rank").shadowRoot != null){
        document.getElementById("rank").shadowRoot.innerHTML = "";
        }
    import("../webComponent/rankComentarios.js");
};