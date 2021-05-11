import React, {useState} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function Login() {
    // const [fullName, setfullName] = useState('');
    // const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    // function changeFullName(event){
    //     setfullName(event.target.value);
    // }
    // function changeUserName(event){
    //     setusername(event.target.value);
    // }
    function changeEmail(event){
        setemail(event.target.value);
    }
    function changePassword(event){
        setpassword(event.target.value);
    }
    async function submitHandler(event){
        event.preventDefault();
        const registered = {
            // fullName: fullName,
            // username: username,
            email: email,
            password: password
        }
        await axios.post('http://localhost:5000/login', registered)
            .then(response => {
                console.log(response.data.token);
                sessionStorage.setItem('token', response.data.token);
                window.location = '/forum';
            })        
    }

    return (
        <>
            <div className='login'>
            LOG IN
            </div>
            <div className = 'container' style = {{padding: '80px'}}>
                <div className = 'form-div'>
                    <form onSubmit={submitHandler}>
                        <label></label>
                        {/* <input type = 'text'
                        placeholder = 'Full Name'
                        onChange = {changeFullName}
                        value = {fullName}
                        className = 'form-control form-group'/>

                        <input type = 'text'
                        placeholder = 'User Name'
                        onChange = {changeUserName}
                        value = {username}
                        className = 'form-control form-group'/> */}
                            
                        <input type = 'text'
                        placeholder = 'Email'
                        onChange = {changeEmail}
                        value = {email}
                        className = 'form-control form-group'/>
                            
                        <input type = 'text'
                        placeholder = 'Password'
                        onChange = {changePassword}
                        value = {password}
                        className = 'form-control form-group'/>
                        
                        <input type='submit' className='btn btn-danger btn-block' value='submit' style = {{backgroundColor: '#276678', borderBlockColor: '#276678'}}/>
                            
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login