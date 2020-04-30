class Profile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        #profileCard{
          text-align: center;
          margin: 20px 0;
        }
        #profileCard a{
          text-decoration: none;
        }
        #profileCard a:hover{
          color: gray;
        }
      </style>
      <div id="profileCard">
        <a class="profileLink" href="https://agustinusnathaniel.com" target="_blank" rel="noopener noreferrer">- Agustinus Nathaniel -</a>
      </div>
    `;
  }
}

customElements.define("profile-card", Profile);
