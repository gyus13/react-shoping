/* eslint-disable */

import React, {useState, useContext, useEffect} from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import Detail from './Detail';
import axios from "axios";

function Login() {
    let [id, setId] = useState(' ')
    let [password, setPassword] = useState(' ')
    let [logon, setLogon] = useState(true)
    let [log, setLog] = useState('')

    let [message, setMessage] = useState('');

    useEffect(() => {

        let timer = setTimeout(
            ()=>{
                setLogon(true);
            },3000
        )
        return () => { clearTimeout() }
    },[message])


    return(
        <div style={{
        display : 'flex', justifyContent : 'center', alignItems: 'center',
            width : '100%', height : '100vh'
    }}>

            {
                logon === true
                ? null
                : <Message message={message}/>
            }


            <form style ={{display : 'flex', flexDirection:'column'}} onSubmit={
                (e) => {
                    e.preventDefault();

                axios.post('http://dev.gyus.xyz/app/login', {
                    email: id,
                    password: password
                })
                    .then(function (response) {
                        let isSuccess = response.data.isSuccess;
                        let message = response.data.message;
                        setLogon(isSuccess);
                        setMessage(message);
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                }
            }>
                <input type={"text"} placeholder={"email"} onChange={ (e)=> {
                    setId(e.target.value)
                }
                }/>
                <br/>
                <input type={"password"} placeholder={"password"} onChange={ (e)=> {
                    setPassword(e.target.value)
                }
                }/>
                <br/>
                <button type={"submit"}>Login</button>
                <br/>
            </form>

        </div>
    )
}

function Message(props) {
    return(
        <div>
            <p>{props.message}</p>
        </div>
    )
}

export default Login;