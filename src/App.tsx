import {useState, useEffect, FormEvent} from "react";
import {Container, Navbar} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="/src/assets/logo.jpg" width="80" height="40" className="d-inline-block align-top"/>
            MinTek
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </div>
  );
}

export default App
