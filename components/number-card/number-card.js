import { SHADOW_CSS, JAVASCRIPT } from '../../src/js/constants.js';

/**
 * Card that displays important numbers for emergency situations.
 *
 * Attributes:
 *
 * number: The number
 * institution: The institution with that number
 * text: Description
 */
class AppNumberCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const phoneNumber = this.getAttribute('number'),
      institution = this.getAttribute('institution'),
      text = this.getAttribute('text');

    const template = `
    <script src="${JAVASCRIPT}"></script>
    <style>
    ${SHADOW_CSS}

    .demo-card {
      width: 350px;
      margin: 10px 0 10px 0;
    }

    .mdc-typography--headline6,
    .mdc-typography--subtitle2,
    .mdc-typography--body2 {
      padding: 0 10px;
    }
    </style>

    <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
      <div class="demo-card__primary">
        <h2 class="demo-card__title mdc-typography mdc-typography--headline6">${phoneNumber}</h2>
        <h3 class="demo-card__subtitle mdc-typography mdc-typography--subtitle2">${institution}</h3>
      </div>
      <div class="demo-card__secondary mdc-typography mdc-typography--body2">${text}</div>
    </div>
    <div class="mdc-card__actions">
      <div class="mdc-card__action-icons">
        <a class="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon--unbounded" title="More options" data-mdc-ripple-is-unbounded="true" href="tel:${phoneNumber}">phone</a>
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

export default AppNumberCard;
