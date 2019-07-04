import { salvarEmail, salvarToken } from "../services/auth.js";

async function requestGet(url,login) {
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type" : "application/json",
                "Cache-Control" : "no-cache"
            },
            mode: 'cors',
            body:JSON.stringify(login)

        });
        
        if (!response.ok){
            throw response;
        }
        let temp = await response.json();
        let token = temp.token; 
        salvarToken(token);
        salvarEmail(login.email);
    } catch(error){
        let erro = await error.json();
        sessionStorage.getItem("@token") == "";
        alert(erro.message);
    }
}

export {requestGet};