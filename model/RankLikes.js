async function RankLikes() {
        this.$shadowRoot = this.attachShadow({"mode": "open"});
        this.perfis = [];
        const url = "http://ucdbufcgpsoft.herokuapp.com/api/v1/perfilDisciplinas/getByLikes/";
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
            this.perfis = await response.json();
            this.$shadowRoot.innerHTML = "";
            this.perfis.map(perfil => {
            localStorage.setItem("perfil", this.perfl.id);
            let html = window.location.href = "../view/perfil.html";
            this.$shadowRoot.innerHTML += html;
        });
        } catch (error) {
            const e = error.json();
            console.log(e);
        }
    }

export{RankLikes};