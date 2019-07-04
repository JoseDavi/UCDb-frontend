class psComentario extends HTMLElement {
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    async connectedCallback() {
        this.nome =  this.getAttribute("nome");
        this.id =  this.getAttribute("id");
        this.texto = this.getAttribute("texto");
        this.data = this.getAttribute("data");
        this.render();
    }

    render() {
        let html = `
            <style>
            p {
                color: blue;
            }
            </style>
            <div>
                <p>Usuario: ${this.nome}</p>
                <p>${this.texto}</p>
                <p>Data: ${this.data}</p>
            </div>
        `;
        this.$shadow.innerHTML = html;
    }
}


customElements.define("ps-comentario", psComentario);