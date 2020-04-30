import styleInitSetter from "../styles/styleSetter";
import formatNumber from "../functions/formatNumber";

class DailySummary extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode:'open'});
  }

  set dailySummaryData(summaryData){
    this._summaryData = summaryData;
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML = `
      ${styleInitSetter}
      <style>
        #dailySummary{
          margin: 20px;
          padding: 20px 0;
          text-align: center;
          background-color: #F5F5F6;
          border-radius: 10px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        }
        #dailySummary:hover{
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
        .title{
          margin-bottom: 10px;
        }
        .title p{
          font-weight: 200;
        }
        .data{
          display: flex;
          flex-direction: row;
        }
        .confirmed, .deaths{
          flex-basis: 50%;
        }
        .confirmed{
          color : #DE7356;
        }
        .deaths{
          color: #AB5159;
        }
        @media screen and (max-width: 513px){
          .data{
            display: block;
          }
          .confirmed{
            margin-bottom: 10px;
          }
        }
      </style>
      <div id="dailySummary">
        <div class="title">
          <h2>Daily Summary</h2>
          <p>Report date : ${new Date(this._summaryData.reportDate).toLocaleDateString("en-US", {weekday: 'short', year: 'numeric', month: 'short', day:'numeric'})}</p>
        </div>
        <div class="data">
          <div class="confirmed">
            <h3>Confirmed</h3>
            <p>Total : ${formatNumber(this._summaryData.totalConfirmed)}</p>
            <p>Mainland China : ${formatNumber(this._summaryData.mainlandChina)}</p>
            <p>Other Locations : ${formatNumber(this._summaryData.otherLocations)}</p>
          </div>
          <div class="deaths">
            <h3>Deaths</h3>
            <p>Total : ${formatNumber(this._summaryData.deaths.total)}</p>
            <p>China : ${formatNumber(this._summaryData.deaths.china)}</p>
            <p>Outside China : ${formatNumber(this._summaryData.deaths.outsideChina)}</p>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define("daily-summary", DailySummary);