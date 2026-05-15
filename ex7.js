const template = document.createElement('template');
template.innerHTML = `
  <style>
    .user-card {
      font-family: 'Arial', sans-serif;
      background: #f4f4f4;
      width: 500px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      margin-bottom: 15px;
      border-bottom: darkorchid 5px solid;
      padding: 10px; /* Added padding so it doesn't look squished */
    }
    .user-card img {
      width: 100%;
      border-radius: 5px;
    }
    .user-card button {
      cursor: pointer;
      background: darkorchid;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 5px 10px;
      margin-top: 10px;
    }
    /* This ensures your slotted info (email/phone) is visible */
    .info ::slotted(div) {
      margin-bottom: 5px;
    }
  </style>

  <div class="user-card">
    <img id="avatar-img" />
    <div>
      <h3 id="user-name"></h3>
      <div class="info">
        <slot name="email"></slot>
        <slot name="phone"></slot>
      </div>
      <button id="toggle-info">Hide Info</button>
    </div>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // 1. Set the data from attributes
    this.shadowRoot.querySelector('#user-name').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('#avatar-img').src = this.getAttribute('avatar');

    // 2. Setup the click event
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
    const info = this.shadowRoot.querySelector('.info');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

    if (this.showInfo) {
      info.style.display = 'block';
      toggleBtn.innerText = 'Hide Info';
    } else {
      info.style.display = 'none';
      toggleBtn.innerText = 'Show Info';
    }
  }
}

window.customElements.define('user-card', UserCard);
