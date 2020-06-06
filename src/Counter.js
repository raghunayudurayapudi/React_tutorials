import React, {useState, useEffect} from 'react';
// useState a hook.
const Counter = ({id}) => {
    const [count, setCount] = useState(0); // [0, function] state ={count: 0}
    const [name, setName] = useState('Raghu Nayudu');
    useEffect(()=> {
        // making api calls 
        console.log(name)
    }, [name,id]);
    const [password, setPassword] = useState('');
     useEffect(()=> {
        console.log(password)
    }, [password])
    // called each time whenever the component gets update 
    // you control when this useEffect get called by passing an array
    // if you want call useEffect only one time the pass an empty 
    return (
    <div>
      <p>You clicked  times {count}</p>
    <p>{name}</p>
      <input value={name} onChange= {(event)=> {setName(event.target.value)}}/>
      <input value={password} onChange= {(event)=> {setPassword(event.target.value)}}/>
      <button onClick={() => setCount(count+1)}>
        Click me
      </button>
    </div>
    )
}

export default Counter;

// we can normally perform side effect such as API calls and asynchronus operation only inside a class compoent
// using componentDidUpdate lifeCycle and componentDidMount lifecycle

// Purecomponents
// shouldComponent
// React.Fargments


