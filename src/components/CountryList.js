import "../components/CountryItem";

class CountryList extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode:'open'})
  }

  set countries(countries){
    this._countries = countries;
    this.render()
  }

  render(){
    this.shadowDOM.innerHTML = ``;
    this._countries.forEach((country)=>{
      const countryElement = document.createElement('country-item');
      countryElement.country = country;
      this.shadowDOM.appendChild(countryElement);
    })
  }

  //  render error?
}

customElements.define('country-list', CountryList)