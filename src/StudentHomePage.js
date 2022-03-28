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
  <Card>
    <CardBody className='bg-warning'>
    <h3 className="text-center my-3">
      Student Page{' '}
    </h3>
    </CardBody>
  </Card>
    

    {/* menu */}
    <ListGroup >
      
    <ListGroupItem
        action
        href="/donate"
        tag="a"
      >
          Donate
      </ListGroupItem>


      &nbsp;&nbsp;&nbsp;

      <ListGroupItem
        action
        href="/sell"
        tag="a"
      >
        Sell
      </ListGroupItem>


      &nbsp;&nbsp;&nbsp;

      <ListGroupItem
        action
        href="/buy"
        tag="a"
      >
        Buy
      </ListGroupItem>


      &nbsp;&nbsp;&nbsp;

      <ListGroupItem
        action
        href="/lostandfound"
        tag="a"
      >
       Lost and Found
      </ListGroupItem>
      &nbsp;&nbsp;&nbsp;


      <ListGroupItem
        action
        href="/findRooms"
        tag="a"
      >
        Find Rooms
      </ListGroupItem>


      &nbsp;&nbsp;&nbsp;
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

