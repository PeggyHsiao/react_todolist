import React, { Component } from "react";

const GlobalContext = React.createContext();

class List extends Component {
    render() {
        const { id, text, details } = this.props
        return (
            <GlobalContext.Consumer>
                {
                    (value) => <div style={{ border: '1px solid blue', width: 50, height: 50 }} onClick={() => { 
                        value.changeInfo(details) 
                    }}>({id}){text}</div>
                }
            </GlobalContext.Consumer>
        )
    }
}

class Detail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => <div style={{ border: '1px solid red', float: 'right', width: 200, height: 200 }}>{value.info}</div>
                }            
            </GlobalContext.Consumer>
        )
    }
}

export default class App extends Component {
    state = {
        list: [
            { id: 1, text: 'A', details: 'aaaaa' },
            { id: 2, text: 'B', details: 'bbbbb' },
            { id: 3, text: 'C', details: 'ccccc' }
        ],
        info: ''
    }
    render() {
        return (
            <GlobalContext.Provider value={{ info: this.state.info, changeInfo: (info) => { this.setState({info}) } }}>
                <div>
                    {
                        this.state.list.map(i =>  <List key={i.id} {...i} />)
                    }
                    <Detail/>
                </div>
            </GlobalContext.Provider>
        )
    }
}