import React from 'react';
import { API_BASE_URL, API_KEY } from "../utils/config";

class Dashboard extends React.Component {

  handleSubmit = e => {
    e.preventDefault();

    const { value } = e.target.elements.inputCity;

    // api call to fetch details
    this.fetchAPI(value);
  }

  fetchAPI = city => {
    const url = `${API_BASE_URL}?q=${city}&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => alert(error));
  }

  render() {
    return (
      <React.Fragment>
        <div className = "header-wrapper">
          <form onSubmit = {this.handleSubmit}>
            <input className = "input" name = "inputCity" type = "text" placeholder = "Enter city name" />
            <button className = "btn-weather"> Check Weather </button>
          </form>
        </div>
        <div className = "weather-details-wrapper">
          <div className = "weather-details">
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
