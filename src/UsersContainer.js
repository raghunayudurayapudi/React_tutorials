import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

// "id": 1,
// "name": "Pat Hypothesis",
// "username": "Pathype",
// "email": "pat@hype.nl",

/*
    
    string interpolation
    list item rendering using map
    react-bootstrap library to render list items for documentation
    https://react-bootstrap.netlify.app/components/list-group/

    props.users // array = users information
    [
        <listFroupItems key={index}>Content</listFroupItems>,
         <listFroupItems key={index}>Content</listFroupItems>
    ]
*/
const UsersContainer = (props) => {

    const styleListGroup = {
        width: '500px',
        textAlign: 'center',
        margin: 'auto',
        marginBottom: '10px'
    }
    return (
        <ListGroup style={styleListGroup}>
            {props.users.map((user, index)=> {
                return <ListGroup.Item key={index}>{`User ID is ${user.id},name is ${user.name}`} </ListGroup.Item>
            })}
        </ListGroup>
    )
}

export default UsersContainer;