import styleInitSetter from "../styles/styleSetter";

class CountryItem extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode:'open'})
  }

  set country(country){
    this._country = country;
    this.render();
  }

  render(){
    // const flag = this._country.iso2.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397))
    
    this.shadowDOM.innerHTML = `
      ${styleInitSetter}
      <style>
        div.country-item{
          border-radius: 20px;
          height: 80px;
          box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
          margin: 20px;
          text-align: center;
        }
      </style>
      <div id="${this._country.name}" class="country-item">
        <h3>${this._country.name}</h3>
      </div>
    `
  }
}

customElements.define("country-item", CountryItem)