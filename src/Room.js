import React from 'react';
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
        <Card className='text-center' >
            <CardBody>
                <CardSubtitle className='font-weight-bold'>{room.roomIdx}</CardSubtitle>
                <CardSubtitle className='font-weight-bold'>{room.address}</CardSubtitle>
                <CardSubtitle className='font-weight-bold'>{room.cost}</CardSubtitle>
              
                {/* <Container>
                    <Button color='danger'>Delete</Button>
                    <Button color='warning' className='ml-3'>Update</Button>
                </Container> */}
            </CardBody>
        </Card>
    </div>
  )
}

export default Room;