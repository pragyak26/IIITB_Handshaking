import React from "react";
import { Container } from "reactstrap";
import { Card,CardBody } from "reactstrap";
import { Form ,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import { Row,Col } from "reactstrap";

function Signup(){
    return (
        <div>
             <Container className="text-center my-3"/>
      <Card>
        <CardBody >
        <p className="text-center my-3" style={{color: "Blue"}}>
          Signup to IIITB-Handshake. {' '}
        </p>
        </CardBody>
      </Card>
            <Container/>
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
    <Label for="exampleUrl">
      Roll Number
    </Label>
    <Input
      id="exampleUrl"
      name="url"
      placeholder="url placeholder"
      type="url"
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleNumber">
      Number
    </Label>
    <Input
      id="exampleNumber"
      name="number"
      placeholder="number placeholder"
      type="number"
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
    <Label check>
      Check me out
    </Label>
  </FormGroup>

  <Button>
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Signup;
