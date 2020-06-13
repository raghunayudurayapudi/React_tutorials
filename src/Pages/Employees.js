import React, { Component } from "react";
import server from "../server";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Route, withRouter } from "react-router-dom";

import FullEmployeeDetails from '../Components/FullEmployeeDetails';

class Employess extends Component {
  state = {
    users: [],
  };

  componentDidMount() {

    if(!localStorage.getItem('login')) {
        this.props.history.push('/Login');
    }
    server.get("/users").then(({ data }) => {
      this.setState({
        users: data.users,
      });
    });
  }

  handleViewEmployeeDetails = (id) => {
        this.props.history.push('/Employees/' + id);
  };

  navigateToProjectPage = () => {
      this.props.history.push('/Projects');
  }
  render() {
      console.log(this.props);
    return (
    <Container>
        <p>{this.props.info}</p>
      <Route path={this.props.match.url + '/:id'} exact component={FullEmployeeDetails} />
      <Row>
        {this.state.users.map((user, index) => {
          return (
              <Col sm="6" key={index}>
                <Card body>
          <CardTitle>{user.name}</CardTitle>
                  <CardText>
                        <span>{`User Name is ${user.username}`}</span>
                        <span>{`User is from  ${user.address.city}`}</span>
                        <span>{`Contant on ${user.phone}`}</span>
                  </CardText>
                  <Button onClick={() => {this.handleViewEmployeeDetails(user.id)}}>View</Button>
                  <br/>
                  <Button onClick={this.navigateToProjectPage}>Go to Project Page</Button>
                </Card>
              </Col>
          );
        })}
     </Row>
    </Container>    


    );
  }
}

export default withRouter(Employess);

// withRouter HOC 


// Route to render a compoent based upon routing 