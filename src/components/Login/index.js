import React, { Component } from 'react';

class Field extends Component {
    render(){
        const { type, title, value, changeInput } = this.props;
        
        return(
            <React.Fragment>
                <label>{title}</label>
                <input type={type} value={value} onChange={(e) => {
                    changeInput(e.target.value)
                }}/>
            </React.Fragment>
        )
    }
}

export default class Login extends Component {
    state = {
        username: '',
        password: '',
    }
    render(){
        return(
            <React.Fragment>
                <Field type="text" title="Username" value={this.state.username} changeInput={(value) => {
                    this.setState({ username: value })
                }}/>
                <Field type="password" title="Password" value={this.state.password} changeInput={(value) => {
                    this.setState({ password: value }) }}/>

                <button onClick={() => this.setState({ username: '', password: '' })}>Cancel</button>
                <button onClick={() => console.log(this.state)}>Submit</button>
            </React.Fragment>
        )
    }
}