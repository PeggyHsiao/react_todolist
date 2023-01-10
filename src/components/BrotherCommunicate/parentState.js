import React, { Component } from "react";

class List extends Component {
    render() {
        const { id, text, details, setDetails } = this.props
        return (
            <div style={{ border: '1px solid blue', width: 50, height: 50 }} onClick={() => {
                setDetails(details)
            }}>({id})--{text}</div>
        )
    }
}

class Detail extends Component {
    render() {
        return (
            <div style={{ border: '1px solid red', float: 'right', width: 200, height: 200 }}>{this.props.info}</div>
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
        currentInfo: ''
    }
    getDetailInfo(id){
        this.setState({ currentInfo: this.state.list.find(i => id.id === id).details })
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map(i =>  <List key={i.id} {...i} setDetails={(val) => { this.setState({ currentInfo: val }) }}/>)
                }
                <Detail info={this.state.currentInfo}/>
            </div>
        )
    }
}