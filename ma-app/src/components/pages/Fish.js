import React, {useEffect, useState} from 'react';
import '../../App.css';
import axios from 'axios';
import { useParams } from 'react-router-dom'


function Fish(props) {

    const [fish, setFish] = useState([]);

    async function getFish(){
        axios.get('http://localhost:5000/fish')
        .then(response => {
            setFish(response.data);
        });
    }

    useEffect(() => {
        getFish();
    }, [])


    return (
        <>
            <div className='forum'>
                FISH
            </div>
            <div>
            {fish.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item['scientific name']}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Fish
