import {
  SHADOW_CSS,
  FONTAWESOME_CSS,
  RESPONSIVE_CSS_CARD
} from '../../src/js/constants.js';

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
    <style>
    ${SHADOW_CSS}
    ${FONTAWESOME_CSS}

    .w3-card {
      width: 400px;
      margin: 0 10px;
      padding: 0;
    }

    .phone-card {
      padding: 10px;
      margin: 10px 0;
    }

    .phone-card-icon-container {
      text-align: right;
    }

    ${RESPONSIVE_CSS_CARD}
    </style>
    <h2>${phoneNumber}<h2>
    <h3>${institution}</h3>
    <p>${text}</p>
    <div class="phone-card-icon-container">
      <a href="tel:${phoneNumber}" title="Call ${phoneNumber}">
        <i class="fas fa-phone"></i>
      </a>
    </div>
    `;

    const templateContent = document.createElement('div');
    templateContent.classList.add('w3-panel', 'w3-card', 'phone-card');
    templateContent.innerHTML = template;

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );
  }
}

export default AppNumberCard;
