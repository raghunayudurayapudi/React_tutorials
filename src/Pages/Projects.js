import React from "react";
import moment from "moment";
import server from '../server';
import { sortBy } from "lodash";
import {Container, Table, Row, Col} from 'reactstrap'; 
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
      console.log(this.props.location)
    server.get("/projects")
      .then(({data}) => {
        this.setState({
          projects: sortBy(data.projects, [
            function(project) {
              return parseInt(project.projectName.match(/\d+/));
            }
          ])
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  createTable() {
    const table = this.state.projects.map((project, index) => (
      <tr key={index}>
        <td>{project.projectName}</td>
        <td>{project.description}</td>
        <td>{project.supervisor}</td>

        <td>
          {moment(project.startDate)
            .utc()
            .format("LL")}
        </td>
        <td>
          {project.endDate === null
            ? "n/a"
            : moment(project.endDate).format("LL")}
        </td>
      </tr>
    ));
    return table;
  }
  render() {
    return (
      <Container>
        <h1 className="page-header">Projects</h1>
        <Row>
          <Col md="12">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>supervisor</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>{this.createTable()}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;