class psDisciplina extends HTMLElement {
    constructor() {
        super();
        this.$shadow = this.attachShadow({"mode": "open"});
    }

    async connectedCallback() {
        this.nome =  this.innerHTML;
        this.id =  this.getAttribute("id");
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
                <p>${this.id} - ${this.nome}</p>
                <button id="ir">Ir</button>
            </div>
        `;

        this.$shadow.innerHTML = html;
        this.$shadow.getElementById("ir").onclick = () => { 
            if(sessionStorage.getItem("@token")== undefined || sessionStorage.getItem("@token")==""){
                alert("Você não está logado");
                window.location.href = "../view/index.html";
            }else{
            localStorage.setItem("perfil", this.id);
            window.location.href = "../view/perfil.html";
            }
        }
    }
}


customElements.define("ps-disciplina", psDisciplina);