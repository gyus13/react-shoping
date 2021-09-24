import React, {useEffect, useState} from "react";
import { useHistory, useParams } from 'react-router-dom';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import './Detail.scss';

import {CSSTransition} from "react-transition-group";
import {connect} from "react-redux";

let Box = styled.div`
  padding : 20px;
`;
let Subject = styled.h4`
  font-size : 25px;
  color : ${ props => props.colors }
`;

function Detail(props) {

    let [alert,alertAlert] = useState(true)
    let [inputText,alertInputText] = useState(' ')

    let [tab, alertTab] = useState(0);
    let [aniSwitch, alertAniSwitch] = useState(false);

    useEffect(() => {

       let timer = setTimeout(
           ()=>{
            alertAlert(false);
           },2000
       )
        return () => { clearTimeout() }
    },[alert]); // alert가 있을때만 실행되는 Hook 조건문임


    let { id } = useParams();
    let findItem = props.shoes.find( (item)=>{
        return item.id == id
    });

    let history = useHistory();

    return(
        <div className="container">
            <Box>
                <Subject className={"red"}>Detail</Subject>
            </Box>

            {
                alert === true
                    ? <div className={"my-alert2"}>
                        <p>재고가 얼마 남지 않았습니다.</p>
                    </div>
                    : null
            }

            <input onChange={
                (e)=>{
                    alertInputText(e.target.value)
                }
            }/>

            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + (findItem.id + 1) + '.jpg'} width={"100%"} />
                </div>

                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}</p>
                    <Info stores={props.stores}></Info>
                    <button className="btn btn-danger" onClick={ ()=>{
                        //사본 만들기
                        //props.alertStores([9,10,11])
                        props.dispatch({type: 'addCart', payload : {id : findItem.id, name : findItem.title, quan : 1}});
                        history.push('/cart');

                    } }> 주문하기 </button>
                    <button className="btn btn-danger" onClick={
                        ()=>{
                            history.goBack();
                        }
                    }> 뒤로가기 </button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick = {() => {
                        alertAniSwitch(false);
                        alertTab(0);
                    }}>Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick = {() => {
                        alertAniSwitch(false);
                        alertTab(1);
                    }}>Option 2</Nav.Link>
                </Nav.Item>
            </Nav>

            <CSSTransition in={aniSwitch} classNames={"wow"} timeout={500}>
                <TabContent tab={tab} alertAniSwitch={alertAniSwitch}/>
            </CSSTransition>

        </div>
    )
}

function TabContent(props) {

    useEffect( ()=>{
        props.alertAniSwitch(true);
    })

    if(props.tab === 0) {
        return <div>0번째</div>
    }
    if(props.tab === 1) {
        return <div>1번째</div>
    }
    if(props.tab === 2) {
        return <div>2번째</div>
    }

}

function Info(props){
    return (
        <p>재고 : {props.stores[0]}</p>
    )
}

function stateToProps(state) {
    console.log(state);
    return {
        state : state.reducer,
        alertStateIs : state.reducer2
    }
}

export default connect(stateToProps)(Detail)

//Lifecycle Hook
// class Detail2 extends React.Component {
//
//     componentDidMount() {
//
//     }
//
//     componentWillUnmount() {
//
//     }
// }