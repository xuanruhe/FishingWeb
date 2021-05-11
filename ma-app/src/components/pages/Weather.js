
import axios from 'axios';
import React from 'react';
import '../../App.css';
import '../Recipe.css';
import {useEffect, useState, useRef} from 'react';

function Weather() {
    const APP_KEY = "c000488962a7dbd6c0000095a65d542d";
    const [ingredients, setIngredients] = useState({});
    const inputRef = useRef(null);
    const search = () => {
        searchForRecipe(inputRef.current.value)
    }
    const searchForRecipe = async (query) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APP_KEY}&units=metric`

        await axios.get(url)
        //.then(response => {return response.json()})
        .then(res => {
            setIngredients(res.data);
         })
    }

    useEffect(() => {
        searchForRecipe('Vancouver');
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
                    <div className = 'wrapper'>
                            
                            <div className='recipe_container'>
                                <span>{ingredients.name}</span>
                                <div>
                                    {
                                        // ingredients.weather.map((weather,index) => {
                                        //     return <img src={weather.icon} alt = ' '/>
                                        // })
                                    }
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Weather;