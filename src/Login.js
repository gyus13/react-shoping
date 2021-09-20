/* eslint-disable */

import React,{ useState, useContext } from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import Detail from './Detail';
import axios from "axios";

function Login() {
    let [id, setId] = useState(' ')
    let [password, setPassword] = useState(' ')
    let [logon, setLogon] = useState(false)


    return(
        <div style={{
        display : 'flex', justifyContent : 'center', alignItems: 'center',
            width : '100%', height : '100vh'
    }}>

            {
                logon === true
                ? <p> 성공! </p>
                    : null
            }

            <form style ={{display : 'flex', flexDirection:'column'}} onSubmit={
                (e) => {
                    e.preventDefault();

                axios.post('http://dev.gyus.xyz/app/login', {
                    email: id,
                    password: password
                })
                    .then(function (response) {
                        setLogon(true);
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                }
            }>
                <input type={"email"} placeholder={"email"} onChange={ (e)=> {
                    setId(e.target.value)
                }
                }/>
                <input type={"password"} placeholder={"password"} onChange={ (e)=> {
                    setPassword(e.target.value)
                }
                }/>
                <button type={"submit"}>Login</button>
            </form>

        </div>
    )
}

function Success() {
    return(
        <div className={"my-alert2"}>
            <p> 성공! </p>
        </div>
    )
}

export default Login;