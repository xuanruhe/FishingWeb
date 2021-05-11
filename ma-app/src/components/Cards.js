import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/hero-lures.jpg'
                        text='Explore all the fish species reside in British Columbia'
                        label='Fish'
                        path='/fishes'
                        />
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Explore all the fish species reside in British Columbia'
                        label='Tool'
                        path='/tools'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Explore all the fish species reside in British Columbia'
                        label='Weather'
                        path='/weather'
                        />
                        <CardItem 
                        src='images/img-recipe.jpg'
                        text='Explore all the fish species reside in British Columbia'
                        label='Recipe'
                        path='/recipe'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
