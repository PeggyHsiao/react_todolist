import React, { Component } from "react";

export default class App extends Component {
    state = {
        bool: true,
        str: 'aaa'
    }
    // *Warning: componentWillMount has been renamed, and is not recommended for use.
    // *Move code with side effects to componentDidMount, and set initial state in the constructor.

    // componentWillMount(){
    //     console.log('before render')
    // }
    componentDidMount(){
        console.log('render finish')
        // Axios
        // Change DOM
    }
    render(){
        console.log('render')
        return(
            <div>
                <h1>React Componet Lify Cycle</h1>
                <h6>{this.state.bool.toString()} / {this.state.str}</h6>
                <button onClick={() => this.setState({ bool: !this.state.bool })}>Change boolean</button>
                <button onClick={() => this.setState({ str: 'bbb' })}>Change string</button>
            </div>
        )
    }
    shouldComponentUpdate(newProps, newState){
        // 快捷鍵: scu + tab
        // 控制是否要執行update，return true => 執行 / return true => 不執行
        // 參數，即將被update的新資料

        return JSON.stringify(this.state) !== JSON.stringify(newState); 

    }
    // *Warning: componentWillUpdate has been renamed, and is not recommended for use.
    // *Move data fetching code or side effects to componentDidUpdate.
    // componentWillUpdate(){
    //     console.log('before update render')
    // }
    componentDidUpdate(oldProps, oldState){
        // 快捷鍵: cdm + tab
        // 只要有更新state的時候，就會執行
        // 參數，update前的舊資料
        console.log('finish update')
    }
}