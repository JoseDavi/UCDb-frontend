
class buscarId extends HTMLElement {
    constructor() {
        super();
        this.$shadowRoot = this.attachShadow({"mode": "open"});
        this.disciplina = null;
    }

    async connectedCallback() {
        this.query = this.getAttribute('query');
    }

    async api() {
        const url = "http://localhost:8080/api/v1/disciplinas/" + this.query;
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
            this.disciplina = await response.json();
        } catch (error) {
            const e = error.json();
            console.log(e);
        }
    }

    async render() {
        await this.api();
        if(this.disciplina.id!=undefined){
        this.$shadowRoot.innerHTML = "";
        let html = `
                <ps-disciplina id=${this.disciplina.id}>${this.disciplina.nome}</ps-disciplina>
            `;
        this.$shadowRoot.innerHTML = html;
        }
    }

    static get observedAttributes() {
        return ['query'];
    }

    async attributeChangedCallback(nome, antigo, novo) {
        this.query = novo;
        await this.render();
    }
}
customElements.define("lst-id", buscarId);