import React from 'react';
import {Container, Row, Col} from 'reactstrap';


class NotFound extends React.Component{
    render(){
        return(
            <Container>
            <h1 className="page-header">Not Found</h1>
            <Row>
              <Col md="12">
                <span>Page Not Found</span>
              </Col>
            </Row>
          </Container>
        )
    }
}


export default NotFound;