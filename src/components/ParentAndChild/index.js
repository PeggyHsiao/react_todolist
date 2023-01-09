import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <button onClick={() => {
                    // console.log(this.props.event)
                    this.props.event(); // 呼叫父元件對應方法
                }}>Burger icon</button>
            </nav>
        )
    }
}

class Sidebar extends Component {
    render(){
        return(
            <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        )
    }
}

export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            isShowSidebar: false
        }
    }
    handleNavbarClick(){
        // 透過子元件this.props.event()來連動執行父元件方法
        this.setState({ isShowSidebar: !this.state.isShowSidebar })
    }
    render(){
        return(
            <div>
                <Navbar event={() => { this.handleNavbarClick() }}/>
                { this.state.isShowSidebar && <Sidebar /> }
            </div>
        )
    }
}