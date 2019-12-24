import React from 'react';
import { ICON_IMAGE_URL } from '../utils/config';

// functional component
// destructure of props & return valid react element
const WeatherDetails = ({ weatherData }) => {
    return (
        <div className = "weather-details-wrapper">
          <div className = "weather-details-list">
            <div className = "list-wrapper">
              <div className = "city">{weatherData.cityName}</div>
              <div className = "temprature">{weatherData.temp} ºC</div>
              <img className = "icon-image" src = {`${ICON_IMAGE_URL}/${weatherData.icon}.png`} alt = "Weather Icon" />
              <div className = "description">({weatherData.description})</div>
            </div>
          </div>
        </div>
    );
}

export default WeatherDetails;
