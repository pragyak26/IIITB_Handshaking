import React from 'react';
import { Container, Form, Input } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import {Card,CardBody} from 'reactstrap';
import { Button } from 'reactstrap';
import { useState } from 'react';
import axios from "axios";
import base_url from './api/bootapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function notify(){ 
  toast("Product added succesfully!");
}
function Donate(){

  
  const [userdata,setuser]=useState({});
  const handleform_donate=(e)=>{
  
    postdatatoserver(userdata);
    e.preventDefault();
    notify();
   
  
  };
  //creating fun to post data on server
  const postdatatoserver=(data)=>{
    console.log(userdata)
    axios.post(`${base_url}/donate/addItem` ,data).then(
      (response)=>{
          console.log(response);
          console.log("success");
      },
      (error)=>{
          console.log(error);
          console.log("error");
      }
    )
  };


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

  <Form onSubmit={handleform_donate}>
  <FormGroup>
    
     Product Name
    
    <Input
      id="product"
      name="product"
      placeholder="Enter product name"
      type="text"
      onChange={(e)=>{
        setuser({...userdata,productname: e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
   
      Details
   
    <Input
      id="detail"
      name="detail"
      placeholder="Condition of product"
      type="text"
      onChange={(e)=>{
        setuser({...userdata,details: e.target.value})
      }}
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
      onChange={(e)=>{
        setuser({...userdata,image: e.target.value})
      }}
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