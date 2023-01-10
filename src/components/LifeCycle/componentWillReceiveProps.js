import React, { Component } from 'react';

const engList = ['aaa','bbb','ccc']
const numList = ['111','222','333']

class Child extends Component {
    state = {
        list: []
    }
    componentDidMount(){
        if(this.props.current === 'eng') {
            this.setState({ list: engList })
        } else if(this.props.current === 'num') {
            this.setState({ list: numList })
        }
    }
    // *Warning: componentWillReceiveProps has been renamed, and is not recommended for use.
    // *Move data fetching code or side effects to componentDidUpdate.
    componentWillReceiveProps(newProps){
        if(newProps.current === 'eng') {
            this.setState({ list: engList })
        } else if(newProps.current === 'num') {
            this.setState({ list: numList })
        }
    }
    render(){
        return(
            <ol>
                {
                    this.state.list.map(i => <li key={i}>{i}</li>)
                }
            </ol>
        )
    }
}
export default class App extends Component {
    state = {
        currentType: 'eng'
    }
    render(){
        return(
            <React.Fragment>
                <ul>
                    <li onClick={() => this.setState({currentType: 'eng'})}>English List</li>
                    <li onClick={() => this.setState({currentType: 'num'})}>Number List</li>
                </ul>
                <Child current={this.state.currentType}/>
            </React.Fragment>
        )
    }
}