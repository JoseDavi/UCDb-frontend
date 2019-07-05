
async function ComentarioApi(idPerfil, email, texto){
    const url = "https://ucdbufcgpsoft.herokuapp.com/api/v1/perfilDisciplinas/comentou/" + idPerfil + "/" + email;
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type" : "application/json",
                "Cache-Control" : "no-cache",
                "Authorization" : `Bearer ${sessionStorage.getItem("@token")}` 
            },
            mode: 'cors',
            body: texto
        }); 
        if (!response.ok){
            throw response;
        }
    }catch (error){
        const e = error.json();
    }
}

async function DeleteApi(idcomentario){
    const url = "https://ucdbufcgpsoft.herokuapp.com/api/v1/perfilDisciplinas/deleteComentario/" + idcomentario;
    try {
        let response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type" : "application/json",
                "Cache-Control" : "no-cache",
                "Authorization" : `Bearer ${sessionStorage.getItem("@token")}` 
            },
            mode: 'cors',
            body: 'eita'
        });
        if (!response.ok){
            throw response;
        }
    }catch (error){
        const e = error.json();
    }
}
export {DeleteApi};
export {ComentarioApi};