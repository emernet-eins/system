import { SHADOW_CSS, FONTAWESOME_CSS } from '../../src/js/constants.js';

/**
 * Top bar header with links
 *
 * Attributes:
 *
 * title: The sites title to be displayed in the left corner of the top bar
 * fa-classes: A with commas seperated list of fontawesome classes for the link icons
 * linksHref: A with commas seperated list of actual url for the link texts.
 */
class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const template = `
      <style>
      ${SHADOW_CSS}
      ${FONTAWESOME_CSS}

      .w3-bar {
        display: flex;
        align-items: center;
      }

      .logo {
        width: 75px;
        height: 75px;
        background: url("/thirdparty/img/logo.png") center no-repeat;
        background-size: contain;
      }

      .fas {
        font-size: 18px;
      }

      .bar-link-container {
        display: flex;
        justify-content: end;
      }
      </style>
      
      <div class="logo"></div>
      <div class="w3-dropdown-hover">
      <button class="w3-button fas fa-globe-americas"></button>
        <div class="w3-dropdown-content w3-bar-block w3-card-4">
          <a href="/pages/de/" class="w3-bar-item w3-button">Deutschland</a>
          <a href="/pages/at/" class="w3-bar-item w3-button">Österreich</a>
          <a href="/pages/ch/" class="w3-bar-item w3-button">Schweiz</a>
          <a href="/pages/uk/" class="w3-bar-item w3-button">United Kingdom</a>
          <a href="/pages/us/" class="w3-bar-item w3-button">United States</a>
        </div>
      </div>
    `;

    const templateContent = document.createElement('div');
    templateContent.classList.add('w3-bar', 'w3-teal');
    templateContent.innerHTML = template;

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );

    if (this.getAttribute('fa-classes') !== '') {
      this.createLinks(shadowRoot);
    }
  }

  createLinks(shadowRoot) {
    const linksText = this.getAttribute('fa-classes').split(',');
    const linksHref = this.getAttribute('link-hrefs').split(',');

    linksText.forEach((text, index) => {
      const link = document.createElement('a');
      link.classList.add('w3-bar-item', 'w3-button');
      link.href = linksHref[index];

      const linkInner = document.createElement('i');
      linkInner.classList.add(text.trim(), 'fas');
      link.appendChild(linkInner);

      shadowRoot.appendChild(link);
    });
  }
}

export default AppHeader;
