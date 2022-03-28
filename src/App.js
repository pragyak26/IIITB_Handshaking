
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

function App() {
  return (
 
    <div >
      <Container>
        <Row>
          
          <BrowserRouter>
    
    <Routes>
  
  <Route path="/" element={<StudentHomePage />} />
  <Route path="/donate" element={<Donate />} />
  <Route path="/findRooms" element={<FindRooms />} />
  <Route path="/sell" element={<Sell />} />
  <Route path="/lostandfound" element={<Lostandfound />} />
  </Routes>
     
  
      </BrowserRouter>
    
        </Row>
   
    
   </Container>
    
    </div>
  );
}

export default App;
