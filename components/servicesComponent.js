class ServiceComponent extends HTMLElement {
  static get observedAttributes() {
    return ["title", "description", "img-src"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .service-container {
          display: flex;
          border-radius: 12px;
          gap: 20px;
          padding: 20px;
          flex-direction: column;
          width: min(calc(100% - 40px), 300px);
          border: 1px solid #16181D;
        }
        .title {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }

        .description {
          margin: 0;
          font-size: 14px;
          color: #C0C4CE;
        }

        .info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
      </style>

      <div class="service-container">
        <img width="48px" height="48px" src="" class="service-image"/>
        <div class="info">
          <h3 class="title"></h3>
          <p class="description"></p>
        </div>
      </div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.shadowRoot) return;

    if (name === "title") {
      this.shadowRoot.querySelector(".title").textContent = newValue;
      this.shadowRoot.querySelector(".service-image").alt = newValue;
    } else if (name === "description") {
      this.shadowRoot.querySelector(".description").textContent = newValue;
    } else if (name === "img-src") {
      this.shadowRoot.querySelector(".service-image").src = newValue;
    }
  }
}

customElements.define("service-component", ServiceComponent);
