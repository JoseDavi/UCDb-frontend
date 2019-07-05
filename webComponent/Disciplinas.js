import "./psDisciplina.js";

class Disciplinas extends HTMLElement {
    constructor() {
        super();
        this.$shadowRoot = this.attachShadow({"mode": "open"});
        this.disciplinas = [];
    }

    async connectedCallback() {
        this.query = this.getAttribute('query');
    }

    async api() {
        const url = "https://ucdbufcgpsoft.herokuapp.com/api/v1/disciplinas/find/" + this.query;
        try {
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type" : "application/json",
                    "Cache-Control" : "no-cache"
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
                <ps-disciplina id=${disciplina.id}>${disciplina.nome}</ps-disciplina>
            `;

            this.$shadowRoot.innerHTML += html;
        });
    }

    static get observedAttributes() {
        return ['query'];
    }

    async attributeChangedCallback(nome, antigo, novo) {
        this.query = novo;
        await this.render();
    }
}

customElements.define("lst-disciplinas", Disciplinas);