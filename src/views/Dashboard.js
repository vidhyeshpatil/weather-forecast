import React from 'react';
import { API_BASE_URL, API_KEY } from '../utils/config';
import InputWrapper from '../components/InputWrapper';
import WeatherDetails from '../components/WeatherDetails';

export default class Dashboard extends React.Component {
  // component state object
  // no need to constructor when do read props in the method
  state = {
    weatherData: null,
  }

  handleSubmit = e => {
    // prevents default behaviour of form
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
        // api success response
        const { temp } = response.main;
        const { description, icon } = response.weather[0];
        const cityName = response.name;
        const weatherData = {
          temp,
          description,
          icon,
          cityName,
        };
        // updating the weather data depending on the api response
        this.setState({
          weatherData,
        });
      })
      .catch(error => alert(error)); // throws error exceptions
  }

  render() {
    const { weatherData } = this.state;

    return (
      <React.Fragment>
        <InputWrapper handleSubmit = {this.handleSubmit} />
        {/* Conditional Rendering of the component */}
        {weatherData && <WeatherDetails weatherData = {weatherData} />}
      </React.Fragment>
    );
  }
}
