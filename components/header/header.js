import { SHADOW_CSS, JAVASCRIPT } from '../../src/js/constants.js';

class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const template = `
    <script src="${JAVASCRIPT}"></script>
    <style>
    ${SHADOW_CSS};
    </style>
      <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
            <span class="mdc-top-app-bar__title">${title}</span>
          </section>
          <section id="links" class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"></section>
        </div>
    </header>
    `;

    const templateContent = document.createElement('div');
    templateContent.innerHTML = template;

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );

    this.createLinks(shadowRoot);
  }

  createLinks(shadowRoot) {
    const linksText = this.getAttribute('link-titles').split(',');
    const linksHref = this.getAttribute('link-hrefs').split(',');

    console.log(shadowRoot);
    const section = shadowRoot.querySelector('#links');

    linksText.forEach((text, index) => {
      const link = document.createElement('a');
      link.innerText = text;
      link.href = linksHref[index];

      section.appendChild(link);
    });
  }
}

export default AppHeader;
