import React from "react";
import {Table} from "react-bootstrap";
import {connect} from "react-redux";

function Cart(props) {
    return(
        <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.state.map(
                        (a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{ a.id + 1 }</td>
                                    <td>{ a.name }</td>
                                    <td>{ a.quan }</td>
                                    <td><button onClick = { () => { props.dispatch({ type : 'increase', payload : {name : 'kim'} }) }}>+</button>
                                        <button onClick = { () => { props.dispatch({ type : 'decrease' }) }}>-</button></td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </Table>
            {
                props.alertStateIs === true
                ? <div className={"my-alert2"}>
                        <p> 지금 구매하시면 20% 할인</p>
                        <button onClick = { () => {
                        props.dispatch({type : 'close'})
                        }
                        }>닫기</button>
                    </div>
                    :null
                // 간단한 기능들은 useState쓰고 여러 컴포넌트를 중복으로 사용하는 것은 Redux로 써야한다.
            }
        </div>
    )
}

//tr 반복문 돌려보기
// function trtr(props) {
//     return(
//
//     )
// }


//redux store 데이터 갖고와서 props로 변환시켜준다.
function stateToProps(state) {
    console.log(state);
    return {
        state : state.reducer,
        alertStateIs : state.reducer2
    }
}

export default connect(stateToProps)(Cart)

//export default Cart;