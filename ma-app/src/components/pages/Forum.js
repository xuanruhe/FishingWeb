import React, {useEffect, useState} from 'react';
import '../../App.css';
import axios from 'axios';
import '../forum.css';

function Forum() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);

    async function getPosts(){
        axios.get('http://localhost:5000/posts')
        .then(response => {
            setPosts(response.data);
        });
    }

    useEffect(() => {
        getPosts();
    }, [])

    function changeTitle(event){
        setTitle(event.target.value);
    }
    function changeContent(event){
        setContent(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const post = {
            title: title,
            content: content,
            secret_token: sessionStorage.getItem('token')
        }
        console.log(post);
        axios.post('http://localhost:5000/posts', post)
        .then(response => console.log(response.data));
        window.location = '/forum';
    }

    return (
        <>
            <div className='forum'>
                FORUMMM
            </div>
            <div>
            {posts.map((item, index) => {
                    const title = item.title
                    const date = item.date.toString().substring(0, 10);
                    return(
                        <div key = {index} className='wrapper'>
                            <a className='title' href={'/forum/' + title}>{title}</a>
                            <p className='date'>{date}</p>
                        </div>
                    )
                })}
            </div>
            <div className = 'container' >
                <div className = 'form-div' >
                    <form onSubmit={submitHandler}>
                        <label></label>
                        <input type = 'text'
                        placeholder = 'Title'
                        onChange = {changeTitle}
                        value = {title}
                        className = 'form-control form-group'/>

                        <textarea type = 'text'
                        placeholder = 'Content'
                        onChange = {changeContent}
                        value = {content}
                        className = 'form-control form-group'/>
                        
                        <input type='submit' className='btn btn-danger btn-block' value='submit' style = {{backgroundColor: '#276678', borderBlockColor: '#276678'}}/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Forum