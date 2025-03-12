class ProjectComponent extends HTMLElement {
  static get observedAttributes() {
    return ["title", "description", "img-src"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .project-container {
          display: flex;
          align-items: center;
          background-color: #292C34;
          padding: 12px;
          border-radius: 8px;
          color: #C0C4CE;
          gap: 20px;
          flex-direction: column;
          width: min(calc(100% - 24px), 300px);
        transition: all 0.2s ease-in-out;

        }

        .project-container:hover {
          cursor: pointer;
          border: 1px solid #12B76A;
    transition: all 0.2s ease-in-out;

        }

        .project-image {
          width: 100%;
          max-width: 306px;
          height: 156px;
          background-color: #878EA1;
          border-radius: 8px;
          background-size: cover;
          background-position: center;
        }

        .title {
          margin: 0;
          font-size: 16px;
          color: #fff;
          text-align: center;
        }

        .description {
          margin: 0;
          font-size: 14px;
          color: #C0C4CE;
          text-align: center;
        }

        .info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: center;
        }
      </style>

      <div class="project-container">
        <div class="project-image"></div>
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
    } else if (name === "description") {
      this.shadowRoot.querySelector(".description").textContent = newValue;
    } else if (name === "img-src") {
      this.shadowRoot.querySelector(".project-image").style.backgroundImage = `url(${newValue})`;
    }
  }
}

customElements.define("project-component", ProjectComponent);
