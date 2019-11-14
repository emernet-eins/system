/**
 * You can adjust this import whether you need global constants or not
 */
import { SHADOW_CSS, JAVASCRIPT } from '../../src/js/constants.js';

/**
 * This is the component. Please choose its name like AppCustomComponentName.
 * Also, please add some short explanation here what your component does and please
 * explain its attributes, if it has any
 */
class AppComponentName extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Markup
    const template = `
    <!-- 
        Because this component get loaded in a Shadow DOM, 
        please include Google's Material Library here, if
        your component uses it. If not, you can safaley delete
        both the script and the style tag
    -->
    <script src="${JAVASCRIPT}"></script>
    <style>
    ${SHADOW_CSS};

    /**
     * If your component uses own CSS, place it here. Be sure
     * to not override other components styles
     */
    </style>
      <!-- Your markup goes here -->
      <h4>Hi, thanks for helping us out!</h4>
    `;

    /**
     * Important to laod the component in the site, you can ignore this.
     * Per default, your markup get loaded inside a div. If you don't want this,
     * change it below.
     */
    const templateContent = document.createElement('div');
    templateContent.innerHTML = template;

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );
  }
}

/**
 * Adjust this export to fit your component class
 */
export default AppComponentName;
