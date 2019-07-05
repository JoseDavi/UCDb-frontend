import "../webComponent/psDisciplina.js";

class RankLikes extends HTMLElement {

    get likes() {
        return this.hasAttribute('likes');
      }
    
    set likes(val) {
    // Reflect the value of the open property as an HTML attribute.
        if (val) {
            this.setAttribute('likes', '');
        } else {
            this.removeAttribute('likes');
        }
    }

    get comentario() {
        return this.hasAttribute('comentario');
      }
    
    set comentario(val) {
    // Reflect the value of the open property as an HTML attribute.
        if (val) {
            this.setAttribute('comentario', '');
        } else {
            this.removeAttribute('comentario');
        }
    }

    constructor() {
        super();
        this.$shadowRoot = this.attachShadow({"mode": "open"});
        this.disciplinas = [];
    }
    async connectedCallback() {
        this.render();
    }
    async apiLikes() {
        const url = "https://ucdbufcgpsoft.herokuapp.com/api/v1/perfilDisciplinas/getByLikes";
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
            this.disciplinas = await response.json();
        } catch (error) {
            const e = error.json();
            console.log(e);
        }
    }

    async apiComentario() {
        const url = "https://ucdbufcgpsoft.herokuapp.com/api/v1/perfilDisciplinas/getByComentarios";
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
            this.disciplinas = await response.json();
        } catch (error) {
            const e = error.json();
            console.log(e);
        }
    }

    async render() {
        if (this.likes) {
            await this.apiLikes();
        }
        else await this.apiComentario();
        this.$shadowRoot.innerHTML = "";
        this.disciplinas.map(disciplina => {
            let html = `
                <ps-disciplina id=${disciplina.id}>${disciplina.disciplina.nome} Likes: ${disciplina.numeroLikes} Comentarios: ${disciplina.numeroComentarios}</ps-disciplina>
            `;

            this.$shadowRoot.innerHTML += html;
        });
    }

    static get observedAttributes() {
        return ['query'];
    }

    async attributeChangedCallback() {
        await this.render();
    }
}
customElements.define("like-disciplinas", RankLikes);