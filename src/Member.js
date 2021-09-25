import React from 'react';

import {combineReducers, createStore} from "redux";
import {useDispatch, useSelector} from "react-redux";


function Member() {

    let state = useSelector((state) => state);
    console.log(state);
    let dispatch = useDispatch();


    return(
        <div>
            <h1> 회원가입 </h1>
            <br/>
            <br/>
            <form >
                <input placeholder = "email"/>
                <br/>
                <br/>
                <input placeholder = 'password'/>
                <br/>
                <br/>
                <input placeholder = 'name'/>
                <br/>
                <br/>
                <input placeholder = 'phonenumber'/>
                <br/>
                <br/>
                <button onClick={ () => {dispatch( {type : 'login', email : email, )}}>회원가입</button>
            </form>
        </div>
    )
}

export default Member;