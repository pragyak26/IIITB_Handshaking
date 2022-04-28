import React from 'react';
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
    Button,
} from "reactstrap";

const Room = ({room}) => {
  return (

    <div>

<Row>


<Col>
        <Card className='text-center' >
            <CardBody>
                
                {/* <CardSubtitle className='font-weight-bold'>{room.roomIdx} </CardSubtitle> */}
                <Row>
                    <Col>Address</Col>
                
                <Col>
                <CardSubtitle 
                 className='font-weight-bold'>{room.address}</CardSubtitle>
                </Col>
                
                    </Row>


                    <Row>
                        <Col>Rent</Col>
                        <Col> <CardSubtitle className='font-weight-bold'>{room.cost}</CardSubtitle></Col>
                   

                    </Row>
              
               
            </CardBody>
        </Card>
        </Col>
        </Row>
    </div>
  )
}

export default Room;