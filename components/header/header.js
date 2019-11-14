import { SHADOW_CSS, JAVASCRIPT } from '../../src/js/constants.js';

class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = `
      <script src="${JAVASCRIPT}"></script>
      <style>
        ${SHADOW_CSS};
      </style>
      <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
            <span class="mdc-top-app-bar__title">Title</span>
          </section>
        </div>
      </header>
    `;

    const templateContent = document.createElement('div');
    templateContent.innerHTML = template;

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );
  }
}

export default AppHeader;
