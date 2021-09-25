import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';

import { Provider } from 'react-redux';
import {combineReducers, createStore} from "redux";

let memberState = '';

// function reducer3(state = memberState, action) {
//     switch (action.type) {
//         case 'login'
//             break;
//     }
// }

let alertState = true;
// state가 많이 필요하면 reducer많이 만들어야한다.
function reducer2(state = alertState, action){
    if(action.type === 'close'){
        state = false;
        return state
    }else{
        return state;
    }

}

let defaultState = [
    { id: 0, name : 'coolShoes', quan : '2'},
    { id: 1, name : 'hotShoes', quan : '2'}
];

function reducer(state = defaultState, action) { // action 은 dispatch의 데이터들을 보낸다.

    if(action.type === 'addCart') {

        //findeIndex의 리턴값은 조건에 해당하는 값의 인덱스를 리턴한다.
        let found = state.findIndex( (a)=>{ return a.id === action.payload.id });

        if (found >= 0){

            let copiedState = [...state];
            copiedState[found].quan++;
            return copiedState;

        } else {

            let copiedState = [...state];
            copiedState.push(action.payload);
            return copiedState;

        }



    }else if ( action.type === 'increase'){

        let copiedState = [...state];
        copiedState[action.data].quan++;
        return copiedState

    }else if( action.type === 'decrease' ){
        let copiedState = [...state];
        copiedState[action.data].quan--;
        return copiedState

    } else {
        return state
    }


}

let store = createStore(combineReducers({reducer,reducer2})); // reducer모아놓은ㄴ 기능

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
