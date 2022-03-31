import React from 'react';
import { Container, Form, Input } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import {Card,CardBody} from 'reactstrap';
import { Button } from 'reactstrap';
function Donate(){
return(<div>
  <Container/>
  <Card>
    <CardBody>
    <h8 style={{color: "Blue"}}  >
      Fill the details of item you want to donate{' '}
    </h8>
    </CardBody>
  </Card>
    
  
<Card>
  <CardBody>

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

  </CardBody>
</Card>
    
</div>)
};

export default Donate;