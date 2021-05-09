import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherDetails from './weatherDetails'

/* Component used to show weather details for given location which time interval of 3 hours */
const WeatherList = ({weathers}) => {
    return (
        <Row>
           {weathers.map(({dt, main, weather}) => (
                <Col key={dt}>
                    <WeatherDetails 
                    temp_max={main.temp_max} 
                    temp_min={main.temp_min} 
                    dt={dt * 1000} 
                    main={weather[0].main} 
                    icon={weather[0].icon} 
                  />
                </Col>
            ))} 
        </Row>
    )
}

export default WeatherList;