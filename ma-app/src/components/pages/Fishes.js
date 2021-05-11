import React, {useEffect, useState} from 'react';
import '../../App.css';
import axios from 'axios';
import { useParams } from 'react-router-dom'


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
        <>
            <div className='forum'>
                FISH
            </div>
            <div>
            {fishes.map((item, index) => {
                console.log(item.image)
                    return (
                        <div key={index}>
                            <a href={'/fishes/' + item.name}>{item.name}</a>
                            <img src="https://www.digopaul.com/wp-content/uploads/related_images/2015/09/08/cabezone_1.jpg" alt=""/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Fishes
