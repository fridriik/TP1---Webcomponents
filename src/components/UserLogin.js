class UserLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = /*html*/`
        <style>
            form { 
                display: flex; 
                flex-direction: column;
                gap: 8px;  
                width: 50vw; 
                margin: auto;
                border: 1px solid grey; 
                border-radius: 8px;
                padding: 16px; 
                background-color: #0F1B2B;
            }

            h1{
                text-align: center;
                margin-top: 8px;
                color: #F1F8FF;
                font-family:'Trebuchet MS';
            }

            input { 
                padding: 16px; 
                font-size: 16px; 
                border: 1px solid grey; 
                border-radius: 8px;
                font-family:'Trebuchet MS';
                background-color: #F1F8FF;
            }

            input:hover{
                background-color: #D2E2F2;
            }

            input:focus-visible{
                outline: 2px solid #D2E2F2; 
            }

            button { 
                margin-top: 8px; 
                padding: 16px; 
                font-size: 16px; 
                border-radius: 8px; 
                border-width: 0px;
                background: #0C447B;
                color: #F1F8FF;
                font-family:'Trebuchet MS';
                cursor: pointer; 
            }

            button:hover{
                background-color: #D2E2F2;
                color: #040506;
            }
        </style>
        <form id="loginForm">
            <h1>User Login</h1>
            <input type="text" id="username" name="username" placeholder="Usuario" required>
            <input type="password" id="password" name="password" placeholder="Contraseña" required>
            <button id="bton" type="submit">Iniciar Sesión</button>
        </form>
        `;

        this.shadowRoot.getElementById("bton").addEventListener("click", this.submitForm.bind(this));
    }

    submitForm(event) {
        event.preventDefault();
        
        const username = this.shadowRoot.querySelector('#username').value.trim();
        const password = this.shadowRoot.querySelector('#password').value.trim();

        //Mensajes según validaciones de los inputs
        const validations = [
            [!username && !password, 'login-warning', 'Los campos están vacíos.'],
            [!username, 'login-warning', 'El campo Usuario está vacío.'],
            [!password, 'login-warning', 'El campo Contraseña está vacío.'],
            [username === 'user' && password === 'pass', 'login-success', 'Inicio de sesión exitoso.'],
            [true, 'login-error', 'Error en el inicio de sesión.'] //Se evalua hasta encontrar el valor por defecto final
        ];

        //Me importan el type y el message
        const [, type, message] = validations.find(([condition]) => condition);

        this.dispatchEvent(new CustomEvent(type, {
            detail: { message: message },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('user-login', UserLogin);