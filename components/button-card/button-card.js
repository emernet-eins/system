import { SHADOW_CSS, RESPONSIVE_CSS_CARD } from '../../src/js/constants.js';

/**
 * Card that serves as navigation and info element.
 *
 * Attributes:
 *
 * image-url: Url of background-image
 * title: Title of the card
 * subtitle: Subtitle of the card
 * text: Text in card body
 * button-text: Text of button
 * button-link: Link of button
 */
class AppButtonCard extends HTMLElement {
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
          margin: 0 10px;
          padding: 0;
        }

        .card-background-image {
          height: 200px;
          background-size: cover;
          display: flex;
          align-content: end;
          color:
          #fff;
          padding: 10px;
        }

        .card-background-image > h2 {
          align-self: end;
        }

        .w3-card > p {
          padding: 10px;
        }

        .w3-card > h3 {
          padding: 0 10px;
        }

        .button-card-mid {
            display: flex;
            justify-content: center;
        }

        .button-card-mid > a {
            margin: 5px;
        }

        ${RESPONSIVE_CSS_CARD}
        </style>
        ${
          imageUrl
            ? `<div class="card-background-image" style="background-image: url('${imageUrl}');"><h2>${title}</h2></div>`
            : `<h2>${title}</h2>`
        }
        <h3>${subtitle}</h3>
        <p>${text}</p>
        <div class="button-card-mid"></div>
    `;

    const templateContent = document.createElement('div');
    templateContent.classList.add('w3-panel', 'w3-card');
    templateContent.innerHTML = template;

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );

    this.createButton(shadowRoot);
  }

  createButton(shadowRoot) {
    const buttonText = this.getAttribute('button-text'),
      buttonLink = this.getAttribute('button-link');

    const button = document.createElement('a');
    button.href = buttonLink;
    button.innerText = buttonText;
    button.classList.add('w3-button', 'w3-ripple', 'w3-teal');

    shadowRoot.querySelector('.button-card-mid').appendChild(button);
  }
}

export default AppButtonCard;
