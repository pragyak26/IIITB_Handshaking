import React from "react";
import { Container } from "reactstrap";
import { Card,CardBody } from "reactstrap";
import { Row,Col } from 'reactstrap';
import StudentHomePage from './StudentHomePage';

function Home(){
  console.log(localStorage.getItem('user'));
return (<div>


    <Container/>
  

  <Col> <StudentHomePage /></Col>
  <Col>
  <Card>
    <CardBody >
    <p className="text-center my-3">
      IIITB-Handshaking is a platform which helps all the students in campus of IIITB to connect and react to each other. {' '}
    </p>
    </CardBody>
  </Card>
  </Col>


</div>)
};

export default Home;
