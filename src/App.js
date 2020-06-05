import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import server from './server';
import Button from 'react-bootstrap/Button'
import UsersContainer from './UsersContainer';
/*
  functional components
  classbased component
*/

/* import React from 'react'
  always export component
  return JSX is nothing React.createElements
*/
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//           My Tutorial
//       </header>
//     </div>
//   );
// }

/* state and props
  onclick
  onClick
*/

/*
  create a file [componentName].css
  inline style
*/ 

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'raghu Rayapudi',
      toggle: true,
      users: []
    }
    this.toggleDisplayElement = this.toggleDisplayElement.bind(this);

    // mounting 
    // https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1
    // no side effects like setTimeout or making an rest api or ajax call 

    // we can intialize the state , bind scope 

    // static getDerivedStateFromProps(props, state) {
    //   if (props.currentRow !== state.lastRow) {
    //     return {
    //       isScrollingDown: props.currentRow > state.lastRow,
    //       lastRow: props.currentRow,
    //     };
    //   }
    //   // Return null to indicate no change to state.
    //   return null;
    // }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedState');
      return null;
    // we can change the state of the component - do's
    // we should not perform side effects. - dont's
  }

  shouldComponentUpdate(nextProps, nextState) {
    // dont update state and dont call setState
    console.log("ShouldComponentUpdate");
      return nextProps.id !== this.props.id;
  }

  render() {
      // setState inside render 
    // no side effects 
    console.log('render');
    const color = (this.state.toggle) ? 'blue' : 'red'
    const toggleStyle = {
        display: 'inline-block',
        padding: '10px',
        backgroundColor: color
    };
    return (
      <div className="App">
        <Button variant="primary" onClick={this.changeName}>Click Me</Button>
        <Button variant="primary" onClick = {this.toggleDisplayElement}>Toggle</Button>
        <Header className="header" name={this.state.name} />
        <UsersContainer users={this.state.users}/>
         {(this.state.toggle) ? <div style={toggleStyle}>Toogle Value is True</div> : <div style={toggleStyle}>Toogle Value is False</div> }
        <Footer />
    </div>
    )
  }

  getSnapshotBeforeUpdate(props, state) {
    // perfrom operation before calling componentDidUpdate lifecycle
    // we should perform side effect and we should call setState
    console.log("getSnapshotBeforeUpdate");
    return null
    
  }
  componentDidMount() {
    // this.setState inside asynchronus operations promise 
    // perform ajax side effect
      server.get('/users').then(({data}) => {
        console.log('users', data.users);
        this.setState({
          users: data.users
        })
      });
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate')
  }
 /*
  const generateDate = new Promise((resolve, reject) => {
    setTimeOut(function(){
      resolve('Success')
    })
  })

  generate.then((data)=> {
    console.log(data) // sucesss
  })
 */

  changeName = (event) => {
     this.setState({
        name: 'Crazy Guy'
     })
  }

  toggleDisplayElement(event) {
    const changedValue = !this.state.toggle
     this.setState({
        toggle: changedValue
     });
  }
}

export default App;
