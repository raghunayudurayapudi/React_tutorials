import React from 'react';
import {Container, Jumbotron} from 'reactstrap'
const Overview = (props) => {
    return (
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Employee Login Protal</h1>
            <p className="lead">This is a Employee Protal for Maintaing the Employee and Project Information.</p>
          </Container>
        </Jumbotron>
      </div>
    )
}

export default Overview;