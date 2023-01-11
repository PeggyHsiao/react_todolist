import React, { Component, PureComponent } from 'react';

// 透過shouldComponentUpdate來判斷是否執行update
// export default class App extends Component {
//     state = {
//         name: 'AAAA'
//     }
//     shouldComponentUpdate(newProps, newState){
//         return newState.name !== this.state.name
//     }
//     componentDidUpdate(){
//         console.log('did update')
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={() => { this.setState({name: 'BBBB'}) }}>Click</button>
//                 <p>{this.state.name}</p>
//             </div>
//         )
//     }
// }

// 使用PureComponent自行判斷是否要update(不適用頻繁變化的情形)
export default class App extends PureComponent {
    state = {
        name: 'AAAA'
    }
    componentDidUpdate(){
        console.log('did update')
    }
    render(){
        return(
            <div>
                <button onClick={() => { this.setState({name: 'BBBB'}) }}>Click</button>
                <p>{this.state.name}</p>
            </div>
        )
    }
}