class ContactComponent extends HTMLElement {
  static get observedAttributes() {
    return ["title", "href", "img-src"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
<style>
      .contact-container {
        background-color: #414651;
        display: flex;
        border-radius: 8px;
        padding: 20px;
            width: min(calc(100% - 40px), 400px);
        align-content: center;
        align-items: center;
        justify-content: space-between;
      }

      .title {
          margin: 0;
          font-size: 16px;
          font-weight: 400;
          color: #fff;
      }

      .description {
          margin: 0;
          font-size: 14px;
          color: #C0C4CE;
      }

      .social {
          display: flex;
          flex-direction: row;
          gap: 8px;
          align-items: center;
      }
</style>

      <a href="" class="contact-container" target="_blank">
        <div class="social">
          <img width="28px" height="28px" src="" class="contact-image"/>
          <h3 class="title"></h3>
        </div>
        <img src="/imagens/ArrowUpRight.svg" alt="Seta para diagonal" width="20px" height="20px"/>
      </a>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.shadowRoot) return;

    if (name === "title") {
      this.shadowRoot.querySelector(".title").textContent = newValue;
      this.shadowRoot.querySelector(".contact-image").alt = newValue;
    } else if (name === "href") {
      this.shadowRoot.querySelector(".contact-container").href = newValue;
    } else if (name === "img-src") {
      this.shadowRoot.querySelector(".contact-image").src = newValue;
    }
  }
}

customElements.define("contact-component", ContactComponent);
