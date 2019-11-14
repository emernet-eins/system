import { SHADOW_CSS } from '../../src/js/constants.js';

class AppHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = `
    <script src="/thirdparty/js/material.min.js"></script>
      <style>
        ${SHADOW_CSS};
      </style>
        <header class="mdl-layout__header mdl-layout__header--scroll">
          <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">EMERNET E.I.N.S</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation -->
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" href="">Home</a>
              <a class="mdl-navigation__link" href="">About</a>
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">Select your country</span>
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="">Germany</a>
            <a class="mdl-navigation__link" href="">Austria</a>
            <a class="mdl-navigation__link" href="">Switzerland</a>
            <a class="mdl-navigation__link" href="">UK</a>
            <a class="mdl-navigation__link" href="">United States</a>
          </nav>
      `;

    const templateContent = document.createElement('div');
    templateContent.innerHTML = template;

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );
  }
}

export default AppHeader;
