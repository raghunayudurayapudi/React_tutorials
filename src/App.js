import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';


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
      toggle: true
    }
  }
  render() {
    const color = (this.state.toggle) ? 'blue' : 'red'
    const toggleStyle = {
        display: 'inline-block',
        padding: '10px',
        backgroundColor: color
    };
    return (
      <div className="App">
        <button className="button" onClick={this.changeName}>Click Me</button>
        <button className="button" onClick = {this.toggleDisplayElement}>Toggle</button>
        <Header className="header" name={this.state.name} />
         {(this.state.toggle) ? <div style={toggleStyle}>Toogle Value is True</div> : <div style={toggleStyle}>Toogle Value is False</div> }
        <Footer />
    </div>
    )
  }

  changeName = (event) => {
     this.setState({
        name: 'Crazy Guy'
     })
  }

  toggleDisplayElement = (event) => {
    const changedValue = !this.state.toggle
     this.setState({
        toggle: changedValue
     });
  }
}

export default App;
