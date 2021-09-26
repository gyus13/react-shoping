import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { combineReducers, createStore } from "redux";
import axios from "axios";


function Member() {

    let [email, setEmail] = useState(' ');
    let [password, setPassword] = useState(' ');
    let [name, setName] = useState(' ');
    let [number, setNumber] = useState(' ');

    let history = useHistory();

    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    };
    const onPasswordHandler = (e) => {
        setPassword(e.target.value)
    };
    const onNameHandler = (e) => {
        setName(e.target.value)
    };
    const onNumberHandler = (e) => {
        setNumber(e.target.value)
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: email,
            password: password,
            name: name,
            phoneNumber: number
        }

        axios.post('http://dev.gyus.xyz/app/users', body)
            .then(function (response) {
                let isSuccess = response.data.isSuccess;
                history.push('/login');
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

        return (
            <div>
                <h1> 회원가입 </h1>
                <br/>
                <br/>
                <form>
                    <input placeholder="email" onInput={onEmailHandler}/>
                    <br/>
                    <br/>
                    <input placeholder='password' onInput={onPasswordHandler}/>
                    <br/>
                    <br/>
                    <input placeholder='name' onInput={onNameHandler}/>
                    <br/>
                    <br/>
                    <input placeholder='number' onInput={onNumberHandler}/>
                    <br/>
                    <br/>
                    <button onClick={ onSubmitHandler }>회원가입</button>
                </form>
            </div>
        )


}

export default Member;