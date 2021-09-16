import logo from './logo.svg';
import React,{ useState } from 'react';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import './App.css';
import Data from './data';

function App() {

  let [shoes, alertShoes] = useState(Data);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
      <div>
        <h1 className={"background"}> 20% season off</h1>
        <h3> nice to meet you</h3>
      </div>

      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-4"}>
            <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width={"100%"}/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content} & {shoes[0].price}</p>
          </div>
          <div className={"col-md-4"}>
            <img src={"https://codingapple1.github.io/shop/shoes2.jpg"} width={"100%"}/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className={"col-md-4"}>
            <img src={"https://codingapple1.github.io/shop/shoes3.jpg"} width={"100%"}/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
