import React from 'react';
import {Card, CardBody, Input, ListGroup,ListGroupItem} from 'reactstrap';
import { Button } from 'reactstrap';

  import { BrowserRouter, Routes,Route,Router} from 'react-router-dom';
  import Donate from './Donate';
  import FindRooms from './FindRooms';
  import Sell from './Sell';
  import { Container, Row ,Col} from 'reactstrap';
  import Lostandfound from './Lostandfound';
import './StudentHomePage.css';
  import Home from './Home';


function StudentHomePage()
{return (<div>
<Container/>

<Row>
  <Card>
    <CardBody className='bg-warning'>
    <h3 className="text-center my-3">
      Student Page{' '}
    </h3>
    </CardBody>
  </Card>
    

    {/* menu */}
    
      <Col md={3}>

      <ListGroup >
    <ListGroupItem
        action
        href="/home" style={{backgroundColor: "pink"}}
        tag="a"
      >
          Home
      </ListGroupItem>

    <ListGroupItem
        action
        href="/donate"
        tag="a" style={{color: "Blue"}} style={{backgroundColor: "pink"}}
      >
          Donate
      </ListGroupItem>
 
      <ListGroupItem
        action
        href="/sell"
        tag="a" style={{backgroundColor: "pink"}}
      >
        Sell
      </ListGroupItem>

      <ListGroupItem
        action
        href="/buy"
        tag="a" style={{backgroundColor: "pink"}}
      >
        Buy
      </ListGroupItem>

      <ListGroupItem
        action
        href="/lostandfound"
        tag="a" style={{backgroundColor: "pink"}}
      >
       Lost and Found
      </ListGroupItem>
     
      <ListGroupItem
        action
        href="/findRooms"
        tag="a" style={{backgroundColor: "pink"}}
      >
        Find Rooms
      </ListGroupItem>
 
    </ListGroup>



      </Col>
   
    
   
  
{/*     
    <Input/>
    <Button
     color="primary"
     >
       Click Me
    </Button> */}
     
<BrowserRouter>
<Col md={9}>
<Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/donate" element={<Donate />} />
  <Route path="/findRooms" element={<FindRooms />} />
  <Route path="/sell" element={<Sell />} />
  <Route path="/lostandfound" element={<Lostandfound />} />
 
  </Routes>
  </Col>
  
</BrowserRouter>
</Row>




  </div>)
};

  export default StudentHomePage ;

