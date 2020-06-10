import React, {Component} from 'react';
import Overview from "./Pages/Overview";
import Projects from "./Pages/Projects";
import Employees from "./Pages/Employees";
import NotFound from "./Pages/NotFound";
import { Route, Switch } from "react-router-dom";
import './App.css';
import {Container, Button} from 'reactstrap'
import Header from './Components/Header';
class App extends Component {

  state = {
    login: false
  }
  render() {
    return (
      <Container>
      <Header />
      <Button onClick={()=> {this.setState((previousState) => ({login: !previousState.login}))}}>
        {this.state.login ? 'Logout': 'Login'}
        </Button>
      <Switch>
        <Route exact path="/" render={() => <Overview />} />
        {this.state.login && <Route exact path="/Projects" component={Projects} />}
       {this.state.login && <Route path="/Employees" render={() => <Employees info="Additional information about the Route" />} />}
        <Route render={() => <NotFound />} />
      </Switch>
      </Container>

    )
  }
}

// path locahost::3000/user/:id locahost::3000/user/1  locahost::3000/user/2 
// search or query paramerters 
/* 
    const usequery = new URLSearchParams(useLocation().search);
    let {id, age} = useParams(); 
    console.log(usequery.get('isLogin'));
*/

/* 
  Page Not Found - path doesnt with url of our SPA 
*/
export default App;
