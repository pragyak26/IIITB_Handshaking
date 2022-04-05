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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// function NavigationDemo() {
//   const history = useHistory();
//   const navigateTo = () => history.push('/Signup');
// };


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
    },
    (error)=>{
        console.log(error);
        console.log("error");
    }
  )
};


// let navigate = useNavigate(); 
//   const routeChange = () =>{ 
//     let path = `/Signup`; 
//     navigate(path);
//   };

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
    <Label for="exampleEmail">
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
    <Label for="exampleSelect">
      Select
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      onChange={(e)=>{
        setuser({...userdata,role: e.target.value})
      }}
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
    <ArrowForwardIosIcon />
  </Button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Button onClick={event =>  window.location.href='Home'}>
    Sign Up
  </Button>
  {/* {window.location.href ="localhost:3000/Signup"} */}
  {/* <Link to="/Signup" className="btn btn-primary">Sign up1</Link> */}
</Form>

{/* //////////
 <ListGroup>


 <ListGroupItem
        action
        href="/signup"
        tag="a" style={{backgroundColor: "pink"}}
      >
        Sign Up
      </ListGroupItem>
 </ListGroup>

<BrowserRouter>

<Routes>
  <Route path="/signup" element={<Signup />} />
 
 
  </Routes>

  
</BrowserRouter>
////// */}


      </Col>
    </Row>

    

        </CardBody>
      </Card>
    
     

    </div>)
    };
    
    export default Login;
   // export NavigationDemo;