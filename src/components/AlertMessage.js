class AlertMessage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    //Atributos a observar para la reactividad del alert-message
    static get observedAttributes() { return ['type', 'message']; }

    attributeChangedCallback(name, oldValue, newValue) {
        oldValue !== newValue && this.connectedCallback();
    }

    connectedCallback() {
        const type = this.getAttribute('type');
        const message = this.getAttribute('message');

        //Muestro el message, si no se usa o está vacío no se muestra nada
        this.shadowRoot.innerHTML = message ? /*html*/`
        <style>
            .alert { 
                padding: 16px; 
                margin: auto; 
                margin-top: 16px; 
                width:50vw; 
                border: 1px solid transparent; 
                border-radius: 8px; 
                font-family:'Trebuchet MS';
            }
            .alert-error { 
                background-color: #F2DEDE; 
                color: #A94442; 
                border-color: #EBCCD1; 
            }
            .alert-success { 
                background-color: #DFF0D8; 
                color: #3C763D; 
                border-color: #D6E9C6;
            }
            .alert-info { 
                background-color: #D9EDF7; 
                color: #31708F; 
                border-color: #BCE8F1; 
            }
            .alert-warning { 
                background-color: #FFE5B4; 
                color: #D2691E; 
                border-color: #FFCC99; 
            }
        </style>
        <div class="alert alert-${type}">
            ${message}
        </div>
        `:'';
    }
}

customElements.define('alert-message', AlertMessage);
