import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import LocationSelect from './Components/location';
import FetchURL from './hooks/FetchURL';
import {API_KEY, API_BASE_URL} from './API/config'
import WeatherList from './Components/WeatherList';

/* Main component which inturn used LocationSelect and WeatherList components
 to display weather details for given location */

function App() {
  const {data, error, isLoading, setURL} = FetchURL();

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
  <Container className="App">
      <LocationSelect onSearch={(city) => setURL(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
      {getContent()}
    </Container>
  );
};

export default App;
