
async function LikeApi(idPerfil, email){
    const url = "http://ucdbufcgpsoft.herokuapp.com/api/v1/perfilDisciplinas/curtiu/" + idPerfil + "/" + email;
    try {
        let response = await fetch(url, {
            method: "POST",
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
    }catch (error){
        const e = error.json();
    }
}

export {LikeApi};