
import './App.css';
import StudentHomePage from './StudentHomePage';
import { BrowserRouter, Routes,Route,Router} from 'react-router-dom';
import React from "react";
import './App.css';
import Donate from './Donate';
import FindRooms from './FindRooms';
import Sell from './Sell';
import { Container, Row ,Col} from 'reactstrap';
import Lostandfound from './Lostandfound';
import { Card,CardBody } from 'reactstrap';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import Buy from './Buy';
import Found from './Found';
function App() {
  return (
 
  <div >
      
    <Container>
    <Container/>

  {/* <Card>
    <CardBody className='bg-warning'>
    <h4 style={{color: "Blue"}}   className="text-center my-3">
      IIITB-Handshaking {' '}
    </h4>
    </CardBody>
  </Card> */}

     
     
  <BrowserRouter>   
  <Routes>

  <Route path='*' element={<Login />} />
  <Route path="/header" element={<Header />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/home" element={<Home />} />
  <Route path="/studenthomepage" element={<StudentHomePage />} />
  <Route path="/home" element={<Home />} />
  <Route path="/donate" element={<Donate />} />
  <Route path="/findRooms" element={<FindRooms />} />
  <Route path="/sell" element={<Sell />} />
  <Route path="/lostandfound" element={<Lostandfound />} />
  <Route path="/buy" element={<Buy />} />
  <Route path="/found" element={<Found />} />
  </Routes>
     
     
   </BrowserRouter>
   </Container>
   
    </div>
  );
}

export default App;
