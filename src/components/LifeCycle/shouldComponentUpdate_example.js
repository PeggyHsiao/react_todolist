import React, { Component } from 'react';

class Box extends Component {
    shouldComponentUpdate(newProps){
        const { index, current } = this.props; // old props
        // console.log(newProps)
        if(index === current || newProps.index === newProps.current) return true
        return false
    }
    render(){
        console.log('render')

        const { index, current } = this.props;
        const styleObj = {
            width: 100,
            height: 100,
            border: current === index ? '1px solid red' :'1px solid grey',
        }
        return(
            <div style={styleObj}/>
        )
    }
}
export default class App extends Component {
    state = {
        list: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'],
        current: 0
    }
    render(){
        return(
            <div>
                <input type="number" value={this.state.current} min="0" max="9" 
                    onChange={(e) => { this.setState({current: Number(e.target.value)}) }}/>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                    {
                        this.state.list.map((i, index) => 
                            <Box key={index} current={this.state.current} index={index}/>)
                    }
                </div>
            </div>
        )
    }
}