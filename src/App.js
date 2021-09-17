/* eslint-disable */

import logo from './logo.svg';
import React,{ useState } from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './App.css';
import Data from './data';

import Detail from './Detail';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, alertShoes] = useState(Data); // 중요한 데이터는 app.js에다 보관하는게 좋다.


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to={"/"}>Home</Link></Nav.Link>
              <Nav.Link> <Link to={"/detail"}>Detail</Link></Nav.Link>
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
                <h3> nice to meet you</h3>
            </div>

            <div className={"container"}>
                <div className={"row"}>
                    {
                        shoes.map(
                            (shoe,i) => {
                                return(
                                    <Item shoes={shoes[i]} i = {i} key = {i}/>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
      </Route>

      <Route path={"/detail/:id"}>
            <Detail shoes={shoes}/>
      </Route>

</Switch>
    </div>
  );

  function Item(props) {
    return(
    <div className={"col-md-4"}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i +1) + '.jpg'} width={"100%"} />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
    )
  }


}

export default App;
