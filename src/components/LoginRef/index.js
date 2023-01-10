import React, { Component, createRef } from 'react';

class Field extends Component {
    state = {
        value: '',
    }
    clearValue(){
        this.setState({value: ''})
    }
    render(){
        const { type, title } = this.props;
        return(
            <React.Fragment>
                <label>{title}</label>
                <input type={type} value={this.state.value} onChange={(event) => { this.setState({value: event.target.value}) }}/>
            </React.Fragment>
        )
    }
}

export default class Login extends Component {
    username = createRef()
    password = createRef()

    render(){
        return(
            <React.Fragment>
                <Field type="text" title="Username" ref={this.username}/>
                <Field type="password" title="Password" ref={this.password}/>

                <button onClick={() => {
                    this.username.current.clearValue()
                    this.password.current.clearValue()
                }}>Cancel</button>

                <button onClick={() => {
                    console.log({username: this.username.current.state.value, 
                        password: this.password.current.state.value})
                }}>Submit</button>
            </React.Fragment>
        )
    }
}