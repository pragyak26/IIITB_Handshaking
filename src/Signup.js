import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Card,CardBody } from "reactstrap";
import { Form ,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import { Row,Col } from "reactstrap";

import axios from "axios";
import Login from "./Login";
import { BrowserRouter, Routes,Route,Router} from 'react-router-dom';
import { ListGroupItem } from "reactstrap";
import base_url from "./api/bootapi";

function Signup(){
  useEffect(()=>{
      document.title="Signup||IIITB"
  },[]);

  //function to call server
  const [userdata,setuser]=useState({});


  //form handler function
  const handleform=(e)=>{
    console.log(userdata);
    postdatatoserver(userdata);
    // <BrowserRouter>
    // <Routes>
// document.location.href="http://9001/Login"
    // <Route path="/login" element={<Login />} />
    // </Routes>
    // </BrowserRouter>
  
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


   <Form onSubmit={handleform} >
  
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
      onChange={(e)=>{
        setuser({...userdata,email: e.target.value})
      }}
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
      onChange={(e)=>{
        setuser({...userdata,password: e.target.value})
      }}
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
      type="number"
      onChange={(e)=>{
        setuser({...userdata,rollNo: e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleNumber">
      Username
    </Label>
    <Input
      id="exampleNumber"
      name="number"
      placeholder="number placeholder"
      type="username"
      onChange={(e)=>{
        setuser({...userdata,username: e.target.value})
      }}
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
      onChange={(e)=>{
        setuser({...userdata,role: e.target.value})
      }}
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

  <Button type="submit">
    Submit
  </Button>


{/* <BrowserRouter>
<Routes>
<Route path="/login" element={<Login />} />
</Routes>
</BrowserRouter> */}

{/* <Container className="text-center">
<ListGroupItem
        action 
        type="submit"
        className="btn btn-primary" size="lg"
        href="/login"
        tag="a" style={{backgroundColor: "pink"}}
      >
      Submit
</ListGroupItem>
</Container> */}
</Form>
        </div>
    )
}

export default Signup;
