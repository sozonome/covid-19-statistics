import "../components/AppHeader";
import "../components/GlobalDashboard";
import "../components/HeroBanner";
import "../components/SearchBar";
import "../components/CountryList";
import "../components/CountryItem";
import "../components/AppFooter";
import "../components/SearchedCountry";
import "../components/DailySummary";
import "../components/Profile.js";

import "typeface-nunito";
import "typeface-catamaran";
import "../styles/style.css";

const app = () => {
  const baseUrl = "https://covid19.mathdro.id/api";

  const globalDashboard = document.createElement("global-dashboard");
  const searchBarElement = document.createElement("search-bar");
  const countryListElement = document.createElement("country-list");
  const countryItem = document.createElement("country-item");
  const searchedCountry = document.createElement("searched-country");
  const dailySummary = document.createElement("daily-summary");

  const getAllCountry = () => {
    fetch(`${baseUrl}/countries`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          console.log(responseJson.message);
        } else {
          renderAllCountry(responseJson.countries);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDataByCountry = () => {
    fetch(`${baseUrl}/countries/${searchBarElement.value}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          fallbackSearchedCountry(searchBarElement.value);
        } else {
          renderSearchedCountry(responseJson);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getGlobalData = () => {
    fetch(`${baseUrl}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          console.log(responseJson.message);
        } else {
          renderGlobalDashboard(responseJson);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getDailySummary = () => {
    fetch(`${baseUrl}/daily`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          console.log(responseJson.message);
        } else {
          renderDailySummary(responseJson[responseJson.length - 1]);
        }
      });
  };

  const renderAllCountry = (result) => {
    countryListElement.countries = result;
    document.querySelector("main").append(searchBarElement, countryListElement);
  };

  const renderSearchedCountry = (result) => {
    searchedCountry.country = result;
    document.querySelector("main").insertBefore(searchedCountry, dailySummary);
  };
  const fallbackSearchedCountry = (result) => {
    searchedCountry.renderError(result);
    document.querySelector("main").insertBefore(searchedCountry, dailySummary);
  };

  const renderGlobalDashboard = (result) => {
    globalDashboard.globalData = result;
    document.querySelector("main").append(globalDashboard, searchBarElement);
  };

  const renderDailySummary = (result) => {
    dailySummary.dailySummaryData = result;
    document.querySelector("main").append(dailySummary);
  };

  document.addEventListener("DOMContentLoaded", () => {
    getGlobalData();
    getDailySummary();
  });

  searchBarElement.clickEvent = getDataByCountry;
};

export default app;
