import React from "react";
import { Form ,FormGroup,Input,FormText} from "reactstrap";
import { Label,Button } from "reactstrap";
import { Row,Col } from "reactstrap";
import axios from "axios";
import  { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Card,CardBody } from "reactstrap";

function AvailableRooms(){
    useEffect(()=>{
        document.title="AvailableRooms||IIITB"
    },[]);
  //function to call server
  const [userdata,setuser]=useState({});
  //form handler function
  
  const handleform_login=(e)=>{
    console.log(userdata);
    postdatatoserver(userdata);
    e.preventDefault();
  };
  //creating fun to post data on server
  const postdatatoserver=(data)=>{
    axios.post('${base_url}/addUser' ,data).then(
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
  
      return (<div>
      
      
          <Container className="text-center my-3"/>
        <Card>
          <CardBody >
          <p className="text-center my-3" style={{color: "Blue"}}>
          AvailableRooms. {' '}
          </p>
          </CardBody>
        </Card>
  
        <Card>
          <CardBody>
          <Row>
        <Col md={4}>
  
  
        <Form onSubmit={handleform_login}>
    <FormGroup>
      <Label for="User Name">
        User Name
      </Label>
      <Input
        id="username"
        name="username"
        placeholder="with a placeholder"
        type="text"
        onChange={(e)=>{
          setuser({...userdata,username: e.target.value})
        }}
      />
    </FormGroup>

    <FormGroup>
      <Label for="Address">
        Address
      </Label>
      <Input
        id="address"
        name="address"
        placeholder="with a placeholder"
        type="text"
        onChange={(e)=>{
          setuser({...userdata,address: e.target.value})
        }}
      />
    </FormGroup>


    <FormGroup>
      <Label for="Contact">
        Contact
      </Label>
      <Input
        id="contact"
        name="contact"
        placeholder="with a placeholder"
        type="text"
        onChange={(e)=>{
          setuser({...userdata,contact: e.target.value})
        }}
      />
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
    {/* <Button onClick={window.location.href ="http://localhost:3000/Signup"}>
      Sign Up
    </Button> */}
  
    {/* <Link to="/Signup" className="btn btn-primary">Sign up1</Link> */}
  </Form>
        </Col>
      </Row>
  
      
  
          </CardBody>
        </Card>
      
       
  
      </div>)
      };
      

export default AvailableRooms;
