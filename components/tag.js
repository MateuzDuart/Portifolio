class Tag extends HTMLElement {
  static get observedAttributes() {
    return ["text", "img-src"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .tag-container {
          display: flex;
          align-items: center;
          background-color: #292C34;
          padding: 5px 8px;
          border-radius: 8px;
          color: #C0C4CE;
          gap: 4px;
        }
        #tag-imgage {
        }
        .tagText {
          margin: 0;
          font-size: 14px;
        }

      </style>
        <div class="tag-container">
          <img width="24px" height="24px" id="tag-image" src="">
          <p class="tagText"></p>
        </div>
    `;
  }

  // Atualiza os atributos automaticamente
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "text") {
      this.shadowRoot.querySelector(".tagText").innerHTML = newValue;
    } else if (name === "img-src") {
      this.shadowRoot.querySelector("#tag-image").src = newValue;
      this.shadowRoot.querySelector("#tag-image").alt = newValue;
    }
  }
}

customElements.define("tag-component", Tag);
