import { SHADOW_CSS, JAVASCRIPT } from '../../src/js/constants.js';

class AppCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const imageUrl = this.getAttribute('image-url'),
      title = this.getAttribute('title'),
      subtitle = this.getAttribute('subtitle'),
      text = this.getAttribute('text');

    const template = `
        <script src="${JAVASCRIPT}"></script>
        <style>
        ${SHADOW_CSS}

        .demo-card {
          width: 350px;
        }
        </style>
        <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
          <div class="mdc-card__media mdc-card__media--16-9 demo-card__media" style="background-image: url('${
            imageUrl ? imageUrl : ''
          }');"></div>
          <div class="demo-card__primary">
            <h2 class="demo-card__title mdc-typography mdc-typography--headline6">${title}</h2>
            <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">${
              subtitle ? subtitle : ''
            }</h3>
          </div>
          <div class="demo-card__secondary mdc-typography mdc-typography--body2">${text}</div>
        </div>
        <div class="mdc-card__actions">
          <div class="mdc-card__action-buttons">
            <button class="mdc-button mdc-card__action mdc-card__action--button">  <span class="mdc-button__ripple"></span> Read</button>
          </div>
        </div>
    `;

    const templateContent = document.createElement('div');
    templateContent.classList.add('mdc-card', 'demo-card');
    templateContent.innerHTML = template;

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );
  }
}

export default AppCard;
