import styleInitSetter from "../styles/styleSetter";

class GlobalDashboard extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'})
  }

  set globalData(globalData){
    this._confirmed = globalData.confirmed;
    this._recovered = globalData.recovered;
    this._deaths = globalData.deaths;
    var options = { weekday: 'short', year: 'numeric', month: 'short', day:'numeric', hour: "2-digit", minute: "2-digit"};
    this._lastUpdate = new Date(globalData.lastUpdate).toLocaleDateString("en-US", options);
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML = `
      ${styleInitSetter}
      <style>
        .globalStatsContainer{
          padding: 10px;
          background-color: #EEF2EE;
          text-align: center;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
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
      <div class="globalStatsContainer">
        <h2>Global Stats</h2>
        <div class="statsContainer">
          <div class="item confirmed">
            <p>${Intl.NumberFormat('en-EN').format(this._confirmed.value)}</p>
            <h4>Confirmed</h4>
          </div>
          <div class="item recovered">
            <p>${Intl.NumberFormat('en-EN').format(this._recovered.value)}</p>
            <h4>Recovered</h4>
          </div>
          <div class="item deaths">
            <p>${Intl.NumberFormat('en-EN').format(this._deaths.value)}</p>
            <h4>Deaths</h4>
          </div>
        </div>
        <p>Last Update : ${this._lastUpdate}</p>
      </div>
    `
  }
}

customElements.define('global-dashboard', GlobalDashboard);