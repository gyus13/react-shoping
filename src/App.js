/* eslint-disable */

import logo from './logo.svg';
import React,{ useState, useContext } from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './App.css';
import Data from './data';
import Detail from './Detail';
import Login from './Login';
import Cart from './Cart';
import axios from 'axios';

import { Link, Route, Switch, useHistory } from 'react-router-dom';

let stockContext = React.createContext();

function App() {

    let [shoes, alertShoes] = useState(Data); // 중요한 데이터는 app.js에다 보관하는게 좋다.
    let [stocks, alertStocks] = useState([10,11,12]);
    let [loading, alertLoading] = useState(false);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/detail"}>Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
<Switch>
      <Route exact path={"/"}>
        <div>
            <div>
                <h1 className={"background"}> 20% season off</h1>
                {
                    loading === true
                        ? <Load></Load>
                        : null
                }
            </div>

            <div className={"container"}>

                <stockContext.Provider value={stocks}>
                <div className={"row"}>
                    {
                        shoes.map(
                            (shoe,i) => {
                                return(
                                    <Item shoes={shoes[i]} i = {i} key = {i}/> // onClick하면 안됨 html이 아니기때문에.
                                )
                            }
                        )
                    }
                </div>

                </stockContext.Provider>
            </div>
            <button className = "btn btn-primary" onClick={()=> {

                //axios.post('url', {id: 'cdd', pw: 1234}).then().catch
                alertLoading(true);

                axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result) => {

                        alertLoading(false);

                        // 여기에다가는 html 태그 쓰면 안됨(react의 특징)
                        alertShoes((shoes) => [...shoes,...result.data]);
                    })
                    .catch((err) => {

                        alertLoading(false);
                        console.log(err)
                    })

            }}>더보기</button>

            <button onClick = {
                () => {
                    axios.get('http://dev.gyus.xyz/app/test')
                        .then((result) => {
                            console.log(result);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            }>통신</button>
        </div>

      </Route>

      <Route path={"/detail/:id"}>
            <Detail shoes={shoes} stores={stocks} alertStores={alertStocks}/>
      </Route>

    <Route path={"/login"}>
        <Login></Login>
    </Route>

    <Route path={"/cart"}>
        <Cart></Cart>
    </Route>

</Switch>
    </div>
  );

  function Item(props) {

      let stocks = useContext(stockContext); //useContext(범위)
      let history = useHistory();

    return(
    <div className={"col-md-4"} onClick = { () => { history.push('/detail/' + props.shoes.id)}
    }>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i +1) + '.jpg'} width={"100%"} />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
       <Test/>
    </div>
    )
  }

  function Load() {
      return(
          <div>
              <div className={"my-alert2"}>
                  <p>Loading....</p>
              </div>
          </div>
      )
  }

  function Test(){
      let stocks = useContext(stockContext);
      return <p> stock : {stocks[0]}</p>
  }


}

export default App;
