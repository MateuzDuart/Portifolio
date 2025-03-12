class ProfileImage extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .image-container {
          position: relative;
          width: fit-content;
        }
        
        #profile-image {
          border-radius: 100%;
          border: 2px solid #12B76A;
          padding: 4px;
        }

        #code {
          position: absolute;
          bottom: 0;
          right: -4px;
        }
        
      </style>
        <div class="image-container">
          <img width="96px" height="96px" id="profile-image" src="" alt="Imagem">
          <img id="code" width="32px" height="32px" src="/imagens/Code.png"/>
        </div>
    `;
  }

  // Atualiza os atributos automaticamente
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "src") {
      this.shadowRoot.querySelector("#profile-image").src = newValue;
    }
  }
}

customElements.define("profile-image", ProfileImage);
