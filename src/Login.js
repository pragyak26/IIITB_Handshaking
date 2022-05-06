import React from "react";
import { Container, ListGroup } from "reactstrap";
import { Card,CardBody ,Button} from "reactstrap";
import { Form ,FormGroup,Label,Input,FormText} from "reactstrap";
import { Row,Col } from "reactstrap";
import axios from "axios";
import  { useEffect, useState } from "react";
import { Select } from "@material-ui/core";
import './App.css';
import base_url from "./api/bootapi";
import { MenuItem } from "@material-ui/core";
import { Grid,Paper, Avatar, TextField,  Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';



function student(){ 

  window.location.href = '/Home' ;

}


function Login(){
  
   
  
  

  useEffect(()=>{
      document.title="Login||IIITB"
  },[]);
//function to call server
const [userdata,setuser]=useState({});
//form handler function

const [val,setval]=useState({});

const handleform_login=(e)=>{
  console.log(userdata);
  postdatatoserver(userdata);
  e.preventDefault();
 
 
};

const postdatatoserver=async(data)=>{
  // axios.post(`${base_url}/token` ,data).then(
  //   (res1)=>{
  //       console.log(res1);
  //       console.log("success");
  //       localStorage.setItem('token', res1.data.token);

  //       axios.interceptors.request.use(
  //         config => {
  //           config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  //           console.log(config.headers.authorization);
  //           return config;
  //         },
  //         error => {
  //           return Promise.reject(error);
  //         }
  //       )

        
        
  //       axios.post(`https://934a-103-156-19-229.in.ngrok.io/validate`,data, {'authorization' : `Bearer ${localStorage.getItem('token')}`
  //       // "Access-Control-Allow-Origin" : "*",
  //       // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  //       // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
  //     } ).then(
  //         (response)=>{
  //           let res =  response.data;
  //           localStorage.setItem('user',response.data.username);
    
  //           console.log(res.role);
      
  //           if(res.role=="ROLE_STUDENT"){
  //             window.location.href = '/Home' 
  //           }
  //           if(res.role=="ROLE_ALUMNI"){
  //             window.location.href = '/AlumniHomePage' 
  //           }
  //         }
  //       )


  //   },
  //   (error)=>{
  //       console.log(error);
  //       console.log("error");
  //   }
  // )
  let obj = {
    username : userdata.username,
    password : userdata.password
  }
  console.log(obj);
  await fetch(`${base_url}/token`,{
    method:"POST",
    headers: {
      'Accept' : 'application/json, text/plain',
      'Content-Type' : 'application/json; charset=UTF-8'
    },
    body:JSON.stringify(obj)
  }).then((response)=> response.json())
  .then((data) => {
    console.log(data.token);
    localStorage.setItem('token',data.token);
    // console.log(data.value);
  })

  console.log(localStorage.getItem('token'));

  await fetch(`${base_url}/validate`,{
    method : "POST",
    headers : {
      'Authorization' : `Bearer ${localStorage.getItem('token')}`,
      'Content-Type' : 'application/json; charset=UTF-8',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Methods": " POST, PATCH, PUT, DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    },
    body : JSON.stringify(userdata)
  }).then((response) => {
    console.log(response);
  })
   
};

const avatarStyle={backgroundColor:'#1bbd7e'}

    return (
    
<div>


      <Container className="text-center my-3"/>
      <Card>
        <CardBody >
        <Avatar style={avatarStyle}></Avatar>
        <img src="/iiitb_logo.jpg" className="img" style={{weight: 40 ,height:40}}/>
        <p className="text-center my-3" style={{color: "Blue"}}>
      
          Login to IIITB-Handshake. {' '}
        </p>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
        <Row>
      <Col md={4}>


      <Form onSubmit={handleform_login} class="center">
  
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
   
      onChange={(e)=>{
        setuser({...userdata,role: e.target.value})
      }}
      >
      <option value="N/A">Select</option>
      <option value="ROLE_STUDENT">
        Student
      </option>
      <option value="ROLE_ALUMNI">
        Alumni
      </option>
      <option value="ROLE_ADMIN">
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
<Button variant="contained" size="medium" >  Submit</Button>
  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="/signup" className="btn btn-success" style={{marginTop:"10px"}} data-toggle="modal" data-target="#showmoreModal">Signup</a>


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

    