import React from 'react';
import axios from 'axios';


axios.interceptors.request.use(
    config => {
    
        config.headers['Authorization'] = 'Bearer ' + 'Fake Token';
        // config.headers['Content-Type'] = 'application/json';
        return config;
    }
)

axios.interceptors.response.use((respose) => respose, error => {

})
class UsersList extends React.Component {
    state = {
        username: '',
        users: [],
        error: null
    }

    // componentdidmount for making api calls
    // get , put, post , Delete --- > Rest API CRUD operations

    componentDidMount() {
        // this.getData();
    }

    getData = ()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=> {
            const users = response.data;
            this.setState({users});
        }).catch((error)=> {
            this.setState(error);
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Username</label>
                <input type="text" id='name' name="name" value={this.state.username} onChange={this.handleUserInput} />
                <button type="submit">Submit</button>
                </form>
                <ul>
                {this.state.users.map((user, index) => {
                    return (
                    <li key={index}>{user.name}</li>
                    )
                })}
            </ul>
            </div>
  

        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: this.state.username
        }
        axios.post(`https://jsonplaceholder.typicode.com/users`, {user}).then((response) => {
            debugger
            if(response.status === 201) {
                this.getData();
            }
        })
    }

    handleUserInput = (event) => {
        this.setState({
            username: event.target.value
        })
    }
}

export default UsersList;