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
                        path='/fish'
                        />
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Check out all different fishing techniques and fishing tools'
                        label='Tool'
                        path='/tools'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/img-9.jpg'
                        text='Do not waste your time. Just click here to check out the weather'
                        label='Weather'
                        path='/weather'
                        />
                        <CardItem 
                        src='images/img-recipe.jpg'
                        text='Want to try out some yummy fish recipes? Find out here !!!'
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
