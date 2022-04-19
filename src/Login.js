import React from "react";
import { Container, ListGroup } from "reactstrap";
import { Card,CardBody } from "reactstrap";
import { Form ,FormGroup,Label,Input,Button,FormText} from "reactstrap";
import { Row,Col } from "reactstrap";
import axios from "axios";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { BrowserRouter, Routes,Route,Router} from 'react-router-dom';
import Signup from "./Signup";
import { ListGroupItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import StudentHomePage from "./StudentHomePage";



function Login(){


  useEffect(()=>{
      document.title="Login||IIITB"
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



        let res =  response.data;

        if(res.role === "Student")
        
        {
    
        window.location.href = 'https://leetcode.com/explore/'  ;
        
        }




        if(response=="200"){
          
        }
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
          Login to IIITB-Handshake. {' '}
        </p>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
        <Row>
      <Col md={4}>


      <Form onSubmit={handleform_login}>
  <FormGroup>
    <Label for="username">
      User Name
    </Label>
    <Input
      id="username"
      name="username"
      placeholder="Type your Name"
      type="text"
      autoComplete="off"
      onChange={(e)=>{
        setuser({...userdata,username: e.target.value})
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
      placeholder="Type your Password"
      type="password"
      onChange={(e)=>{
        setuser({...userdata,password: e.target.value})
      }}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="select"
      name="select"
      type="select"
    >
      onChange={(e)=>{
        setuser({...userdata,role: e.target.value})
      }}
      <option value="N/A">Select</option>
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
<Row>
<Col>
<Button >
    Submit12e
  
  </Button>
  {/* <a href="/studenthomepage" className="btn btn-success" type="submit" style={{marginTop:"10px"}} data-toggle="modal" data-target="#showmoreModal">Sgdfgdg</a> */}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="/signup" className="btn btn-success" style={{marginTop:"10px"}} data-toggle="modal" data-target="#showmoreModal">Signup</a>
{/* backgroundColor:'#15983e',color:"white",width:"30vw" */}

</Col>

</Row>
  
 

</Form>

      </Col>
    </Row>


        </CardBody>
      </Card>
    
     

    </div>)
    };
    
    export default Login;

    