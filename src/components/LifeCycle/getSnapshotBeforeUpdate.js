import React, { Component } from 'react';


export default class App extends Component {
    myUlRef = React.createRef();
    state = {
        mailList: ['01', '02', '03', '04', '05']
    }
    getSnapshotBeforeUpdate(){
        return [this.myUlRef.current.scrollHeight, this.myUlRef.current.scrollTop] // old scroll height and old scroll top

    }
    componentDidUpdate(oldProps, oldState, value){
        // new ref scroll height - old ref scroll height + old scroll top
        this.myUlRef.current.scrollTop = this.myUlRef.current.scrollHeight - value[0] + value[1]; 
    }
    render(){
        console.log('render')
        return(
            <div>
                <h4>Mail</h4>
                <button onClick={() => { this.setState({ mailList: [...['06', '07', '08', '09', '10'], ...this.state.mailList] }) }}>Receive mail</button>
                <ul ref={this.myUlRef} style={{ height: 260, overflow: 'auto', backgroundColor: 'paleturquoise' }}>
                    { this.state.mailList.map(i => <li key={i} style={{ height: 100, border: '1px solid grey' }}>{i}</li>) }
                </ul>
            </div>
    )
  }
}