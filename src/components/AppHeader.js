import styleInitSetter from '../styles/styleSetter';

class AppHeader extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode:'open'})
  }

  connectedCallback(){
    this.render()
  }

  render(){
    this.shadowDOM.innerHTML = `
      ${styleInitSetter}
      <style>
        :host{
          text-align: center;
          font-family: 'Nunito', sans-serif;
        }
        .headerContainer{
          padding: 20px 0;
        }
        h1{
          font-weight: 800;
        }
        @media screen and (max-width: 513px){
          .headerContainer{
            background-color: #e53935;
          }
        }
      </style>
      <div class="headerContainer">
        <h1>COVID-19</h1>
        <h3>Statistics App</h3>
      </div>
    `
  }
}

customElements.define('app-header', AppHeader)