
// controlled components
import React from 'react';
import { Redirect } from 'react-router';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login: !!localStorage.getItem('Login')
        }
    }

    handleUserName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit =  (event) => {
        event.preventDefault();
        if(this.state.username && this.state.password) {
            setTimeout(() => {
                localStorage.setItem('login', true);
                this.setState({
                    login: true
                })
            }, 2000)
        }
    }
   
    render() {
        return (
            <>
            { this.state.login ?
                <Redirect to="/Employees" /> :
                (<form onSubmit={this.handleSubmit}>
                    <label> User Name 
                        <input onChange={this.handleUserName} type="text" value={this.state.username} />              
                    </label>
                    <label> Password 
                        <input onChange={this.handlePassword} type="password" value={this.state.password} />              
                    </label>
                    <input type="submit" value="Log In"/>
                  </form>)

            }
            </>

        )
    }
}

export default LoginForm