import React, {useEffect, useState} from 'react';
import '../../App.css';
import axios from 'axios';
import { useParams } from 'react-router-dom'


function Fishes(props) {

    const [fishes, setFish] = useState([]);
    const {name} = useParams();

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
                    if (item.name === name) {
                        return (
                            <div key={index}>
                                <h3>Name:</h3>
                                <p>{item.name}</p>
                                <h3>Scientific Name:</h3>
                                <p>{item['scientific name']}</p>
                                <h3>Category:</h3>
                                <p>{item.category}</p>
                                <img src={item.image} alt=""/>
                                <h3>Description: </h3>
                                <div>
                                    {item.description.map((des, index) => {
                                        return (
                                            <p>{des}</p>
                                        )
                                    })}
                                </div>
                                <h3>Location: </h3>
                                <div>
                                    {item.description.map((des, index) => {
                                        return (
                                            <p>{des}</p>
                                        )
                                    })}
                                </div>
                                <h3>Technique: </h3>
                                <div>
                                    {item.description.map((des, index) => {
                                        return (
                                            <p>{des}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        );
                    } else  {
                        return (<div></div>);
                    }
                })}
            </div>
        </>
    )
}

export default Fishes
