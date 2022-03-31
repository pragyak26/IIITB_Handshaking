import React from 'react';
import {Card, CardBody, Container, Input, ListGroup,ListGroupItem} from 'reactstrap';
import { Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function StudentHomePage()
{return (<div>
<Container/>
  {/* <Card>
    <CardBody className='bg-warning'>
    <h3 className="text-center my-3">
      Student Page{' '}
    </h3>
    </CardBody>
  </Card> */}
    

    {/* menu */}
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
    <p />
  
{/*     
    <Input/>
    <Button
     color="primary"
     >
       Click Me
    </Button> */}

  </div>)
};

  export default StudentHomePage ;

