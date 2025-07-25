export class DevCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.querySelector("#dev-card");
    console.log(template);
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.updateContent();
  }

  static get observedAttributes() {
    return ['name', 'position', 'image-url'];
  }

  attributeChangedCallback() {
    this.updateContent();
  }

  updateContent() {
    const name = this.getAttribute('name') || '';
    const position = this.getAttribute('position') || '';
    const image = this.getAttribute('image-url') || './assets/user.png';
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "./component.css");
    this.shadowRoot.appendChild(linkElem);
    this.shadowRoot.querySelector('.name').textContent = name;
    this.shadowRoot.querySelector('.position').textContent = position;
    this.shadowRoot.querySelector('#image').src = image;

  }
}

customElements.define('dev-card', DevCard);