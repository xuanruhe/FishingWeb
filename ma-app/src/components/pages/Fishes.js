import React, {useEffect, useState} from 'react';
import '../../App.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Fishes.css'


function Fishes() {

    const [fishes, setFish] = useState([]);

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
        <div>
            <div className='forum'>
                FISH
            </div>
            <div>
            {fishes.map((item, index) => {
                    return (
                        <div  className = 'wrapper' key={index}>
                            <a className = 'title' href={'/fishes/' + item.name}>{item.name}</a>
                            <img className = 'image' src={item.image} alt=""/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Fishes
