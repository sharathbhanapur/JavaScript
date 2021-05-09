/* 
    Location component includes controls which renders from react bootstrap.
    Enter key down event used to get the weather details for given location
    */

import React , {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const LocationSelect = ({onSearch}) => {
    const[locate, setLocation] = useState('');
        
        const onKeyDown = (event) => {
            if (event.keyCode === 13) {
              onSearch();
            }
          };
        
    return <div>
        <Row>
            <Col>
                <h1>Enter Location</h1>
            </Col>
        </Row>

        <Row>
            <Col xs ={4} className = 'text-center'>
                <FormControl placeholder ='Enter Location' 
                            onChange ={(event) => setLocation(event.target.value)}
                            value ={locate}
                            onKeyDown ={onKeyDown}>

                            </FormControl>
            </Col>
        </Row>

        <Row>
            <Col>
                <Button onClick={() => onSearch(locate)}>Get Weather Details</Button>
            </Col>
        </Row>
    </div>
}


  
export default LocationSelect;