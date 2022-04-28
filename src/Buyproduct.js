
import { Col,Row } from 'reactstrap';
import StudentHomePage from './StudentHomePage';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Container,
    
} from "reactstrap";
import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import base_url from "./api/bootapi";


var Buffer =require("buffer/").Buffer
const Buyproduct = ({product1}) => {

   
   
        const [base64, setBase64] = useState();
        const getimageFromServer=()=>{
            axios.get(`${base_url}/getImage/`+product1.image ,{
                responseType: "arraybuffer",
              }).then(
                (response)=>{
                        console.log(response);
                        toast.success("rooms");
                    
                        setBase64(Buffer.from(response.data, "binary").toString("base64"))
                        console.log(base64);
                },
                (error)=>{
                        console.log(error);
                }
            )        
   
    
            };
      
           

   


return(

<div>

<img src={`data:image/jpeg;charset=utf-8;base64,${base64}`} height={'50'}/>
        <Button onClick={getimageFromServer}>Click Me</Button>



  <Card >
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
   
     
        <Row>


<Col>
       
             
                <Row>
                    <Col md>Product Name</Col>
                
                <Col>
                <CardSubtitle 
                 className='font-weight-bold'>{product1.productname}</CardSubtitle>
                </Col>
                
                    </Row>


                    <Row>
                        <Col>Product Details</Col>
                        <Col> <CardSubtitle className='font-weight-bold'>{product1.details}</CardSubtitle></Col>
                   

                    </Row>


                    <Row>
                        <Col>Product image</Col>
                        <Col> <CardSubtitle className='font-weight-bold'>{product1.image}</CardSubtitle></Col>
                   

                    </Row>
                    
                    <Row>
                        <Col>Price</Col>
                        <Col> <CardSubtitle className='font-weight-bold'>{product1.price}</CardSubtitle></Col>
                   

                    </Row>

                    <Row>
                        <Col>Pictures</Col>
                        <Col> <CardSubtitle className='font-weight-bold'>{product1.details}</CardSubtitle></Col>
                   

                    </Row>
              

</Col>
</Row>
</CardBody> </Card> 
</div>
)
}



export default Buyproduct