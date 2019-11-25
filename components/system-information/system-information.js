/**
 * This is the system information component. It displays distributor, Version, and host system.
 */
class AppSystemInformation extends HTMLElement {
  constructor() {
    super();
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
    `;

    const templateContent = document.createElement('div');
    templateContent.classList.add('app-system-information');
    templateContent.innerHTML = template;

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );

    this.writeVersion(shadowRoot);
    this.writeHostsystem(shadowRoot);
  }

  writeVersion(shadowRoot) {
    fetch('/version.md')
      .then(res => res.text())
      .then(
        text =>
          (shadowRoot.querySelector(
            '#app-system-information-version'
          ).innerText = text)
      );
  }

  writeHostsystem(shadowRoot) {
    fetch('/systeminfo.md')
      .then(res => {
        if (res.ok) {
          return res.text();
        } else {
          throw new Error("Couldn't find systeminfo.md");
        }
      })
      .then(
        text =>
          (shadowRoot.querySelector(
            '#app-system-information-host'
          ).innerText = text)
      )
      .catch(err => {
        console.error(err);
        shadowRoot.querySelector(
          '#app-system-information-host'
        ).innerText = err;
      });
  }
}

export default AppSystemInformation;
