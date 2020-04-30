import styleInitSetter from '../styles/styleSetter';

class HeroBanner extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    this.render()
  }

  render(){
    const ogImg = 'https://covid19.mathdro.id/api/og'

    this.shadowDOM.innerHTML = `
      ${styleInitSetter}
      <style>
        :host{
          display: block;
          margin-bottom: 20px;
          border-radius: 20px;
        }
        img{
          width: 800px;
        }
        @media screen and (max-width:513px){
          img{
            width: 100%;
          }
        }
      </style>
      <img src=${ogImg} alt="Global Stats" />
    `
  }
}

customElements.define('hero-banner', HeroBanner)