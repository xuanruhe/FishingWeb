
import React from 'react';
import '../../App.css';
import '../Recipe.css';
import {useEffect, useState, useRef} from 'react';
import Geocode from "react-geocode";
import ReactWeather, { useOpenWeather } from 'react-open-weather';


function Weather() {
    const APP_KEY = "c000488962a7dbd6c0000095a65d542d";

    Geocode.setApiKey("AIzaSyBiGMoRZlD49qSFNtOEAmgB3pCGTM3Yd0w");
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    Geocode.setLocationType("ROOFTOP");

    const [geoLocation, setGeoLocation] = useState({});

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: APP_KEY,
        lat: geoLocation.lat,
        lon: geoLocation.lon,
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });

    const inputRef = useRef(null);
    const search = () => {
        getGeolocation(inputRef.current.value)
        console.log(geoLocation.lat, geoLocation.lon);
    }

    const getGeolocation = async (query) => {
        Geocode.fromAddress(query).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              setGeoLocation({lat: lat, lon: lng, pos: query});
            },
            (error) => {
              console.error(error);
            }
          );
    }

    useEffect(() => {
        getGeolocation('Vancouver');
    }, []);
    
    return (
        <div>
            <div className='weather'>
                WEATHER
            </div>
            
            <div>
                <div className='search'>
                    <input ref={inputRef} placeholder='Search City'/>
                    <button onClick={search}>Search</button>
                </div>
                <ReactWeather
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang="en"
                    locationLabel={geoLocation.pos}
                    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                    showForecast
                />
            </div>
        </div>
    )
}

export default Weather;