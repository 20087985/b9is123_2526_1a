
class UserProfile extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }


  connectedCallback() {
    this.render();
  }

  render() {

    const name = this.getAttribute('name') || "Anonymous User";
    const role = this.getAttribute('role') || "Guest";
    const color = this.getAttribute('color') || "#3498db";


    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: sans-serif;
          margin-bottom: 15px;
        }
        .card {
          border-left: 5px solid ${color};
          background: #f4f4f4;
          padding: 10px 20px;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h3 { margin: 0; color: #333; }
        p { margin: 0; color: #666; font-size: 0.9rem; }
      </style>

      <div class="card">
        <div>
          <h3>${name}</h3>
          <p>${role}</p>
        </div>
        <button id="btn">Alert Name</button>
      </div>
    `;

    // 4. Add interactivity
    this.shadowRoot.querySelector('#btn').addEventListener('click', () => {
      alert(`Hello, I am ${name}!`);
    });
  }
}


customElements.define('user-profile', UserProfile);
