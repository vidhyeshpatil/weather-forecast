import React from 'react';
import { API_BASE_URL, API_KEY } from '../utils/config';
import InputWrapper from '../components/InputWrapper';
import WeatherDetails from '../components/WeatherDetails';

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
        const { temp } = response.main;
        const { description, icon } = response.weather[0];
        const cityName = response.name;
        const weatherData = {
          temp,
          description,
          icon,
          cityName,
        };
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
        <InputWrapper handleSubmit = {this.handleSubmit} />
        {weatherData && <WeatherDetails weatherData = {weatherData} />}
      </React.Fragment>
    );
  }
}

export default Dashboard;
