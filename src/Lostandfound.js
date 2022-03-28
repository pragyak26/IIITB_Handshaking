import React  from "react";
import { Container } from "reactstrap";
import { Button } from 'reactstrap';
import {Card,CardBody} from 'reactstrap';
function Lostandfound(){
return(<div>
    <Container/>
    <Card>
    <CardBody className='bg-warning'>
    <h4 className="text-center my-3">
      Lost and Found{' '}
    </h4>
    </CardBody>
    </Card>


<div>
  <Button
    color="primary"
  >
    Add found item
  </Button>
</div>


<p>List of the items that has been found.. please collect the items from reception</p>

</div>)
};

export default Lostandfound;
