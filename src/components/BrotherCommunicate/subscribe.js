import React, { Component } from "react";

const center = {
    list: [],
    subscribe(callback){
        this.list.push(callback);
    },
    publish(value){
        this.list.forEach(i =>  i && i(value))
    }
}

//// 訂閱者
// center.subscribe(() => {
//     console.log('訂閱者收到訂閱要執行的方法')
// })

//// 發布者
// center.publish();


class List extends Component {
    render() {
        const { id, text, details } = this.props
        return (
            <div style={{ border: '1px solid blue', width: 50, height: 50 }} onClick={() => { center.publish(details) }}>({id})--{text}</div>
        )
    }
}

class Detail extends Component {
    constructor(){
        super()
        this.state = { info: '' }

        center.subscribe((value) => {
            this.setState({info: value})
        })
    }
    render() {
        return (
            <div style={{ border: '1px solid red', float: 'right', width: 200, height: 200 }}>{this.state.info}</div>
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
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map(i =>  <List key={i.id} {...i} />)
                }
                <Detail/>
            </div>
        )
    }
}