import React, { Component } from 'react';

class Child extends Component {
    componentDidMount(){
        // 綁定在window的監聽，並不會因為元件不顯示(銷毀)而取消
        window.onresize = () => { console.log('resize') }
    }
    render(){
        return <h1>Child</h1>
    }
    componentWillUnmount(){
        window.onresize = null
    }
}
export default class App extends Component {
    state = {
        isShowChild: true
    }
    render(){
        return(
            <div>
                <button onClick={() => {
                    this.setState({isShowChild: !this.state.isShowChild})
                }}>Click</button>

                { this.state.isShowChild && <Child/> }
            </div>
        )
    }
}
