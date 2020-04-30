import styleInitSetter from "../styles/styleSetter";

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#countryInput").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      ${styleInitSetter}
      <style>
        #searchBar{
          padding: 10px 20px;
          display: flex;
        }
        #countryInput{
          border: none;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          flex-basis: 70%;
          padding: 0 20px;
          font-size: 1.4rem;
        }
        #searchButton{
          flex-basis:30%;
          border: none;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          text-transform: uppercase;
          background-color: #7C8E6C;
          color: white;
          font-size: 1.4rem;
        }
        #countryInput, #searchButton{
          height: 10vh;
          font-family: 'Nunito', sans-serif;
        }
        @media screen and (max-width: 513px){
          #countryInput, #searchButton{
            font-size: 1rem;
          }
        }
      </style>
      <div id="searchBar">
        <input id="countryInput" type="text" placeholder="Search by Country"/>
        <button id="searchButton" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM
      .querySelector("#searchButton")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
