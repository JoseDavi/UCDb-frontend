import "./psDisciplina.js";

class rankComentarios extends HTMLElement {
    constructor() {
        super();
        this.$shadowRoot = this.attachShadow({"mode": "open"});
        this.disciplinas = [];
    }
    async connectedCallback() {
        this.render();
    }
    async api() {
        this.shadowRoot.innerHTML = "";
        const url = "http://localhost:8080/api/v1/perfilDisciplinas/getByComentarios";
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
        await this.api();
        this.$shadowRoot.innerHTML = "";
        this.disciplinas.map(disciplina => {
            let html = `
                <ps-disciplina id=${disciplina.id}>${disciplina.disciplina.nome}>${disciplina.numeroComentarios}</ps-disciplina>
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
customElements.define("comentario-disciplinas", rankComentarios);