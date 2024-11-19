class LoginPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = /*html*/`
        <user-login></user-login>
        <alert-message></alert-message>
        `;

        this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
        this.handleLoginWarning = this.handleLoginWarning.bind(this);
        this.handleLoginError = this.handleLoginError.bind(this);
    }

    connectedCallback() {
        this.shadowRoot.querySelector('user-login').addEventListener('login-success', this.handleLoginSuccess);
        this.shadowRoot.querySelector('user-login').addEventListener('login-warning', this.handleLoginWarning);
        this.shadowRoot.querySelector('user-login').addEventListener('login-error', this.handleLoginError);
    }

    handleLoginSuccess(event) {
        const alertMessage = this.shadowRoot.querySelector('alert-message');
        alertMessage.setAttribute('type', 'success');
        alertMessage.setAttribute('message', event.detail.message);
    }

    handleLoginWarning(event) {
        const alertMessage = this.shadowRoot.querySelector('alert-message');
        alertMessage.setAttribute('type', 'warning');
        alertMessage.setAttribute('message', event.detail.message);
    }

    handleLoginError(event) {
        const alertMessage = this.shadowRoot.querySelector('alert-message');
        alertMessage.setAttribute('type', 'error');
        alertMessage.setAttribute('message', event.detail.message);
    }
}

customElements.define('login-page', LoginPage);