import styleInitSetter from "../styles/styleSetter";
import formatNumber from "../functions/formatNumber.js";

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
          text-align: center;
        }
        .statsContainer{
          color: white;
          padding: 10px;
          display: flex;
          flex-direction: row;
        }
        .item{
          flex-basis: 33%;
          background-color: #F5F5F6;
          border-radius: 10px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          transition: all 0.3s cubic-bezier(.25,.8,.25,1);
          padding: 20px 0;
          margin: 0 5px;
        }
        .item:hover{
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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
            <p>${formatNumber(this._confirmed.value)}</p>
            <h4>Confirmed</h4>
          </div>
          <div class="item recovered">
            <p>${formatNumber(this._recovered.value)}</p>
            <h4>Recovered</h4>
          </div>
          <div class="item deaths">
            <p>${formatNumber(this._deaths.value)}</p>
            <h4>Deaths</h4>
          </div>
        </div>
        <p>Last Update : ${this._lastUpdate}</p>
      </div>
    `
  }
}

customElements.define('global-dashboard', GlobalDashboard);