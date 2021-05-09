import React from 'react';
import {Card} from 'react-bootstrap';

/* 
Component which receives date, minimum & maximum temperature, 
climate and icon details and renders on screen */
const WeatherDetails = ({dt, temp_min, temp_max, main, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  return (
    <Card>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature returned in kelvin unit then converted to degree */}
        <p>Min: {parseFloat(temp_min - 273.15).toFixed(2)} °C</p>
        {/* maximum temperature returned in kelvin unit then converted to degree*/}
        <p>Max: {parseFloat(temp_max - 273.15).toFixed(2)} °C</p>
      </Card.Body>
    </Card>
  );
};
export default WeatherDetails;