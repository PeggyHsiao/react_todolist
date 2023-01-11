import React, { Component } from 'react';

const engList = ['aaa', 'bbb', 'ccc']
const numList = ['111', '222', '333']

class Child extends Component {
    state = {
        list: [],
        type: 1
    }
    componentDidMount() {
        if (this.props.current === 'eng') {
            this.setState({ list: engList })
        } else if (this.props.current === 'num') {
            this.setState({ list: numList })
        }
    }
    static getDerivedStateFromProps(newProps) {
        // 不可於此使用axios接收資料
        // 把屬性值(newProps)轉為狀態
        return { type: newProps.current }
    }
    componentDidUpdate(oldProps, oldState) {
        const { type } = this.state;

        if(type === oldProps.current) return

        console.log('axios')

        if (type === 'eng') {
            // 請求axios
            this.setState({ list: engList })
        } else if (type === 'num') {
            this.setState({ list: numList })
        }
    }
    render() {
        return (
            <ol>
                { this.state.list.map(i => <li key={i}>{i}</li>) }
            </ol>
        )
    }
}
export default class App extends Component {
    state = {
        currentType: 'eng'
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li onClick={() => this.setState({ currentType: 'eng' })}>English List</li>
                    <li onClick={() => this.setState({ currentType: 'num' })}>Number List</li>
                </ul>
                <Child current={this.state.currentType} />
            </React.Fragment>
        )
    }
}