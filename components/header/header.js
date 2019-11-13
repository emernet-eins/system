const currentDocument = document.currentScript.ownerDocument;

class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const template = currentDocument.getElementById('header-template');
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);
  }
}

customElements.define('app-header', AppHeader);
