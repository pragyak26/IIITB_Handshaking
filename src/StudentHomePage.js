import React from 'react';
import {Card, CardBody, Input, ListGroup,ListGroupItem} from 'reactstrap';
import { Button } from 'reactstrap';


  import { Container, Row ,Col} from 'reactstrap';

import './StudentHomePage.css';
  


function StudentHomePage()
{return (<div>
<Container/>

{/* <Row> */}
  {/* <Card>
    <CardBody className='bg-warning'>
    <h3 className="text-center my-3">
      Student Page{' '}
    </h3>
    </CardBody>
  </Card> */}
    

    {/* menu */}
    
      {/* <Col md={3}> */}

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



      {/* </Col> */}
   
    

     

{/* </Row> */}




  </div>)
};

  export default StudentHomePage ;

