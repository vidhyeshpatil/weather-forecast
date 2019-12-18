import React from 'react';
import { API_BASE_URL, API_KEY, ICON_IMAGE_URL } from "../utils/config";

class Dashboard extends React.Component {

  state = {
    weatherData: null,
  }

  handleSubmit = e => {
    e.preventDefault();

    const { value } = e.target.elements.inputCity;

    if (value) {
      // api call to fetch details
      this.fetchAPI(value);
    }
  }

  fetchAPI = city => {
    const url = `${API_BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    
    fetch(url)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        const { temp } = response.main;
        const { main, description, icon } = response.weather[0];
        const cityName = response.name;
        const weatherData = {
          temp,
          main,
          description,
          icon,
          cityName,
        };
        console.log(weatherData);
        this.setState({
          weatherData,
        });
      })
      .catch(error => alert(error));
  }

  render() {
    const { weatherData } = this.state;

    return (
      <React.Fragment>
        <div className = "header-wrapper">
          <form onSubmit = {this.handleSubmit}>
            <input className = "input" name = "inputCity" type = "text" placeholder = "Enter city name" />
            <button className = "btn-weather"> Check Weather </button>
          </form>
        </div>
        <div className = "weather-details-wrapper">
          {weatherData && <ul className = "weather-details-list">
            <li className = "temp" >{weatherData.temp} º</li>
            <li className = "temp-title">{weatherData.main}</li>
            <li className = "temp-img">
              <img src = {`${ICON_IMAGE_URL}/${weatherData.icon}.png`} alt = "Weather Icon" />
            </li>
            <li className = "temp-description">({weatherData.description})</li>
            <li className = "city">{weatherData.cityName}</li>
          </ul>}
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
