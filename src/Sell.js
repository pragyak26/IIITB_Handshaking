import React from 'react';


import { Container, Form, Input, Row } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Card,CardBody } from 'reactstrap';
import { Button } from 'reactstrap';
import StudentHomePage from './StudentHomePage';
import { Col } from 'reactstrap';


function Sell(){
return(<div>
  <Container/>
  <Card>
    <CardBody>
    <h8 style={{color: "Blue"}}>
      Fill the details of item you want to Sell{' '}
    </h8>
    </CardBody>
  </Card>
<Row>
 <Col> <StudentHomePage /></Col>
 
  

<Col>
    <Form>
  <FormGroup>
    <Label for="exampleEmail">
     Product Name
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
      Details
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Condition of product"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    

  </FormGroup>

  <FormGroup>
    <Label for="exampleText">
      Image
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>

  <FormGroup>
    <Label for="exampleText">
     Price
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
  </FormGroup>

  <FormGroup>
    <Label for="exampleFile">
      File
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
   
 
  </FormGroup> 
  <Button>
    Submit
  </Button>
</Form>
</Col>
</Row>
</div>)
};

export default Sell;