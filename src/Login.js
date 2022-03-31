import React from "react";
import { Container } from "reactstrap";
import { Card,CardBody } from "reactstrap";
import { Form ,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import { Row,Col } from "reactstrap";
function Login(){
    return (<div>
    
    
        <Container className="text-center my-3"/>
      <Card>
        <CardBody >
        <p className="text-center my-3" style={{color: "Blue"}}>
          Login to IIITB-Handshake. {' '}
        </p>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
        <Row>
      <Col md={4}>
      <Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        Student
      </option>
      <option>
        Alumni
      </option>
      <option>
        Admin
      </option>
      
    </Input>
  </FormGroup>
  
  
 
  
  
  <FormGroup check>
    <Input type="checkbox" />
    {' '}
    <Label check>
      You are not a robot
    </Label>
  </FormGroup>
  <Button>
    Submit
  </Button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Button>
    Sign Up
  </Button>
</Form>
      </Col>
    </Row>

        </CardBody>
      </Card>
    
      

    </div>)
    };
    
    export default Login;