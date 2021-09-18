import React, {useEffect, useState} from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

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

    useEffect(() => {
       let timer = setTimeout(
           ()=>{
            alertAlert(false);
           },2000
       )
        return () => { clearTimeout() }
    },[alert]); // alert가 있을때만 실행되는 Hook


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
                    <button className="btn btn-danger"> 주문하기 </button>
                    <button className="btn btn-danger" onClick={
                        ()=>{
                            history.goBack();
                        }
                    }> 뒤로가기 </button>
                </div>
            </div>
        </div>
    )
}

export default Detail;


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