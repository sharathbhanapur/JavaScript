import React , {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import {API_BASE_URL, API_KEY} from '../API/config'

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