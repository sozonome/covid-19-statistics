class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback(){
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host{
          text-align: center;
        }
        div{
          margin: 30px 0;
          color: #D2D2D2;
        }
        p{
          font-weight: 300;
          margin: 0;
        }
      </style>
      <div>
        <p>Data Source : John Hopkins University CSSE</p>
      </div>
    `;
  }
}

customElements.define("app-footer", AppFooter);
