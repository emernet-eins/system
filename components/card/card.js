import { SHADOW_CSS } from '../../src/js/constants.js';

/**
 * Card that serves as navigation and info element.
 *
 * Attributes:
 *
 * image-url: Url of background-image
 * title: Title of the card
 * subtitle: Subtitle of the card
 * text: Text in card body
 */
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
        <style>
        ${SHADOW_CSS}

        .w3-card {
          width: 400px;
          margin: 5px 10px;
          padding: 0;
        }

        .card-background-image {
          height: 200px;
          background-size: cover;
          display: flex;
          align-content: end;
          color: #fff;
          padding: 10px;
        }

        .card-background-image > h2 {
          align-self: end;
        }

        .w3-card > p {
          padding: 10px;
        }

        /* SMARTPHONES PORTRAIT */
        @media only screen and (max-width: 414px) {
          .w3-card {
            width: 315px;
            margin: 5px 0;
          }
        }

        </style>
        ${
          imageUrl
            ? `<div class="card-background-image" style="background-image: url('${imageUrl}');"><h2>${title}</h2></div>`
            : `<h2>${title}</h2>`
        }
        <h3>${subtitle}</h3>
        <p>${text}</p>
    `;

    const templateContent = document.createElement('div');
    templateContent.classList.add('w3-panel', 'w3-card');
    templateContent.innerHTML = template;

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );
  }
}

export default AppCard;
