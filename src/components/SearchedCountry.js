import styleInitSetter from "../styles/styleSetter";

class SearchedCountry extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode:'open'})
  }

  set country(country){
    this._confirmed = country.confirmed.value;
    this._recovered = country.recovered.value;
    this._deaths = country.deaths.value;
    var options = { weekday: 'short', year: 'numeric', month: 'short', day:'numeric', hour: "2-digit", minute: "2-digit"};
    this._lastUpdate = new Date(country.lastUpdate).toLocaleDateString("en-US", options);
    this.render();
  }

  render(){
    
    this.shadowDOM.innerHTML = `
      ${styleInitSetter}
      <style>
        .searchedContainer{
          margin: 0 20px;
          padding: 10px;
          background-color: #EADFA0;
          text-align: center;
          border-radius: 20px;
        }
        .statsContainer{
          color: white;
          padding: 10px;
          display: flex;
          flex-direction: row;
        }
        .item{
          flex-basis: 33%;
        }
        .item p{
          font-size: 3rem;
          font-weight: 600;
          
        }
        .confirmed{
          color: #DE7356;
        }
        .recovered{
          color: teal;
        }
        .deaths{
          color: #AB5159;
        }
        @media screen and (max-width: 513px){
          .item p{
            font-size: 1.5rem;
          }
        }
      </style>
      <div class="searchedContainer">
        <div class="statsContainer">
          <div class="item confirmed">
            <p>${Intl.NumberFormat('en-EN').format(this._confirmed)}</p>
            <h4>Confirmed</h4>
          </div>
          <div class="item recovered">
            <p>${Intl.NumberFormat('en-EN').format(this._recovered)}</p>
            <h4>Recovered</h4>
          </div>
          <div class="item deaths">
            <p>${Intl.NumberFormat('en-EN').format(this._deaths)}</p>
            <h4>Deaths</h4>
          </div>
        </div>
      </div>
    `
  }

  renderError(searchInput){
    this.shadowDOM.innerHTML = `
      ${styleInitSetter}
      <style>
        h2{
          text-align: center;
          color: #636363;
        }
      </style>
      <h2>${searchInput} can't be found</h2>
    `;
  }
}

customElements.define("searched-country", SearchedCountry)