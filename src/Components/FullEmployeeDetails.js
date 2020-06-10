import React, { Component } from 'react';
import server from '../server';

class FullEmployeeDetails extends Component {
    state = {
        loadedEmployee: null
    }

    componentDidMount () {
        console.log(this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData () {
        if ( this.props.match.params.id ) {
            console.log(this.props.match.params.id);
            if ( !this.state.loadedEmployee || (this.state.loadedEmployee && this.state.loadedEmployee.id !== +this.props.match.params.id) ) {
                server.get( '/users/' + this.props.match.params.id )
                
                    .then( ({data}) => {
                        console.log(this.props.match.params.id);
                        data.user.id = +this.props.match.params.id;
                        // console.log(response);
                        this.setState( { loadedEmployee: data.user, id: data.user.id  } );
                    } );
            }
        }
    }
    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Employee!</p>;
        if ( this.props.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedEmployee ) {
            post = (
                <div className="FullEmployeeDetails">
                    <div>{this.state.id}</div>
                    <h1>{this.state.loadedEmployee.name}</h1>
                    <p>{this.state.loadedEmployee.username}</p>
                </div>

            );
        }
        return post;
    }
}

export default FullEmployeeDetails;