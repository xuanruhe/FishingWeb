import React, {useEffect, useState} from 'react';
import '../../App.css';
import axios from 'axios';
import { useParams } from 'react-router-dom'


function Post(props) {

    const [posts, setPosts] = useState([]);
    const { title } = useParams()

    async function getPosts(){
        axios.get('http://localhost:5000/posts')
        .then(response => {
            setPosts(response.data);
        });
    }

    useEffect(() => {
        getPosts();
    }, [])


    return (
        <>
            <div className='forum'>
                FORUMMM
            </div>
            <div>
            {posts.map((item, index) => {
                    const findTitle = item.title
                    const content = item.content;
                    console.log(title)
                    if (findTitle === title) {
                        return(
                            <div key = {index}>
                                <h1>{title}</h1>
                                <p>{content}</p>
                            </div>
                        )
                    } else {
                        return (<div></div>)
                    }
                })}
            </div>
        </>
    )
}

export default Post