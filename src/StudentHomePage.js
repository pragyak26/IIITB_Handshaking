import React from 'react';

import {Input, ListGroup,ListGroupItem} from 'reactstrap';
import { Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Donate from './Donate';
function StudentHomePage()
{return (<div>
      <h3>
      Student Page{ ' '}
    </h3>
    <ListGroup >
    <ListGroupItem
        action
        href="/"
        tag="a"
      >
        Donate
      </ListGroupItem>

      &nbsp;&nbsp;&nbsp;
      <ListGroupItem
        action
        href="/"
        tag="a"
      >
        Sell
      </ListGroupItem>
      &nbsp;&nbsp;&nbsp;
      <ListGroupItem
        action
        href="/"
        tag="a"
      >
        Buy
      </ListGroupItem>
      &nbsp;&nbsp;&nbsp;
      <ListGroupItem
        action
        href="/"
        tag="a"
      >
       Lost and Found
      </ListGroupItem>
      &nbsp;&nbsp;&nbsp;
      <ListGroupItem
        action
        disabled
        href="/"
        tag="a"
      >
        Find Rooms
      </ListGroupItem>
      &nbsp;&nbsp;&nbsp;
    </ListGroup>
    <p />
  
    
    <Input/>
    <Button
     color="primary"
     >
       Click Me
    </Button>

  </div>)
};

  export default StudentHomePage ;

