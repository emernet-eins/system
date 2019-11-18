/**
 * This is the system information component. It displays distributor, Version, and host system.
 */
class AppSystemInformation extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    // Markup
    const template = `
      <style>
        .app-system-information {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }

        .app-system-information > span {
          margin: 5px 0;
        }

      </style>

      <span>
        Version: 
        <span id="app-system-information-version"></span>
      </span>
      <span>Distributed by EMERNET E.I.N.S.org</span>
      <span>
        Host system:
        <span id="app-system-information-host"></span>
      </span>
    `

    const templateContent = document.createElement('div')
    templateContent.classList.add('app-system-information')
    templateContent.innerHTML = template

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    )

    this.writeVersion(shadowRoot)
  }

  writeVersion(shadowRoot) {
    fetch('/version.md')
      .then(res => res.text())
      .then(
        text =>
          (shadowRoot.querySelector(
            '#app-system-information-version'
          ).innerText = text)
      )
  }
}

export default AppSystemInformation
