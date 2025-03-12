class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 60px;
      }

      .menu-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .menu-toggle div {
          width: 30px;
          height: 3px;
          background-color: #fff;
          border-radius: 2px;
          transition: 0.3s;
        }

        .headerButtons {
          display: flex;
          list-style: none;
          align-items: center;
          gap: 20px;
        }
        
        .headerButton a {
          text-decoration: none;
          color: #fff;
          font-size: 16px;
          transition: 0.3s;
        }

      .headerButtons {
          display: flex;
          list-style: none;
          align-items: center;
          justify-content: flex-end;
          padding: 0 12px;
          gap: 20px;
        }
        
        .headerButton {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        
        .headerButton.active {
        
        }

        .headerButton a {
          text-decoration: none;
          color: #fff;
        }

        .headerButton a:hover {
          text-decoration: none;
          color: #A4A7AE;
        }

        .line {
          width: 100%;
          height: 2px;
          background-color: #fff;
          border-radius: 8px;
          max-width: 150px;
        }

                /* Estilos para telas menores */
        @media (max-width: 520px) {
          .menu-toggle {
            display: flex;
            margin-right: 20px;
            }
            
          .line {
            display: none;
            }
            
            .headerButtons {
              position: absolute;
            top: 60px;
            right: 0;
            background-color: #292C34;
            flex-direction: column;
            width: 200px;
            display: none;
            box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            overflow: hidden;
            }
            
            .headerButtons.active {
              display: flex;
              z-index: 1;
          }

          .headerButton {
            width: 100%;
            text-align: center;
            padding: 10px 0;
          }

          .headerButton a {
            display: block;
            width: 100%;
            padding: 10px;
          }
        }
      </style>
      <header>
      <div class="menu-toggle">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul class="headerButtons">
              <li class="headerButton active">
                  <a href="#Info">Principal</a>
              </li>
              <li class="headerButton">
                  <a href="#about">Sobre mim</a>
                
              </li>
              <li class="headerButton">
                  <a href="#projects">Projetos</a>
                
              </li>
              <li class="headerButton">
                  <a href="#contact">Contato</a>
              </li>
          </ul>
          <span class="line"></span>
      </header>
    `;

    this.setupMenuToggle();
  }

  setupMenuToggle() {
    const menuToggle = this.shadowRoot.querySelector(".menu-toggle");
    const menu = this.shadowRoot.querySelector(".headerButtons");

    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
}
customElements.define("custom-header", Header);
