import { color } from '@mui/system';
import React from 'react';
import {Card, CardBody, Input, ListGroup,ListGroupItem} from 'reactstrap';
import { Button } from 'reactstrap';
import { Container, Row ,Col} from 'reactstrap';
import './StudentHomePage.css';
  import { Navbar,NavbarBrand } from 'reactstrap';
import { Height } from '@material-ui/icons';


function StudentHomePage()
{return (<div>





<Container/>

  <Navbar bg="primary" variant="dark" style={{backgroundColor: "#232F3E"} }>
    
  <img src="/iiitb_logo.jpg" className="img" style={{weight: 40 ,height:40}}/>
 
    <NavbarBrand href="/home" style={{color:"white"}} >
      Home
    </NavbarBrand>



<NavbarBrand href="/donate" style={{color:"white"}}>
      Donate
    </NavbarBrand>


    <NavbarBrand href="/buy" style={{color:"white"}}>
     Buy
    </NavbarBrand>

    <NavbarBrand href="/sell" style={{color:"white"}}>
  Sell
    </NavbarBrand>

    <NavbarBrand href="/lostandfound" style={{color:"white"}}>
     Lost & Found
    </NavbarBrand>

    <NavbarBrand href="/findRooms" style={{color:"white"}}>
      Find Rooms
    </NavbarBrand>
 
    </Navbar>

<Card style={{ width: '80rem' }} >
     
    </Card>
  </div>)
};

  export default StudentHomePage ;

