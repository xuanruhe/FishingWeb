import React from 'react';
import '../../App.css';
import '../Recipe.css';
import {useEffect, useState, useRef} from 'react';

function Recipe() {
    // const APP_KEY = "358307682e51da250de4240ed816c7ed";
    // const APP_ID = "881002a8";
    const [ingredients, setIngredients] = useState([]);
    const inputRef = useRef(null);
    const search = () => {
        searchForRecipe(inputRef.current.value)
    }
    const searchForRecipe = (query) => {
        let url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_RECIPE_API_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}&to=20&calories=591-722`
        fetch(url)
        .then(response => {return response.json()})
        .then(res => {
            console.log(res);
            setIngredients(res.hits);
        })
    }

    useEffect(() => {
        searchForRecipe('fish');
    }, []);
    
    return (
        <div>
            <div className='recipe'>
            RECIPE
            </div>
            <div className='search'>
                <input ref={inputRef} placeholder='Ingredient'/>
                <button onClick={search}>Search</button>
            </div>
            <div className = 'wrapper'>
                {ingredients.map((item, index) => {
                    return(
                        <div key = {index} className='recipe_container'>
                            <span>{item.recipe.label}</span>
                            <img src={item.recipe.image} alt=''/>
                            <div className='steps'>{item.recipe.ingredientLines.map((step,index) => {
                                return <ul key={index}>{step}</ul>
                            })}</div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Recipe
