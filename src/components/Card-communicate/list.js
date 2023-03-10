import React, { Component } from "react";

export default class List extends Component {
    // myInput = React.createRef()
    constructor() {
        super()
        this.state = {
            allList: [
                { id: 1, title: 'MyList01', text: '111111111' },
                { id: 2, title: 'MyList02', text: '222222222' },
                { id: 3, title: 'MyList03', text: '333333333' },
                { id: 4, title: 'MyList04', text: '444444444' },
                { id: 5, title: 'MyList05', text: '555555555' },
                { id: 6, title: 'MyList06', text: '666666666' },
                { id: 7, title: 'MyList07', text: '777777777' },
            ],
            searchKeyword: ''
            // displayList: this.arr.slice()
        }
    }
    // searchList(value){
    //     let newList = this.state.allList.filter(i => i.text.includes(value));
    //     this.setState({ displayList: newList });
    // }
    getDisplayList(){
        return this.state.allList.filter(i => i.text.includes(this.state.searchKeyword));
    }
    render() {
        return (
            <React.Fragment>
                <h1>The Page is List</h1>
                {/* <input type="text" ref={this.myInput} />
                <button onClick={ () => { this.searchList(this.myInput.current.value) } }>Search</button>
                <ul>
                    {
                        this.state.displayList.map(i => 
                        <li key={i.id}>
                            {i.title}&emsp;<span>{i.text}</span>
                        </li>)
                    }
                </ul> */}


                {/* 受控組件 */}
                <input type="text" value={this.state.searchKeyword} onChange={(e) => this.setState({ searchKeyword: e.target.value })}/>
                {/* <button onClick={ () => { this.searchList(this.myInput.current.value) } }>Search</button> */}
                <ul>
                    {
                        this.getDisplayList().map(i => 
                        <li key={i.id}>
                            {i.title}&emsp;<span>{i.text}</span>
                        </li>)
                    }
                </ul>
            </React.Fragment>
        )
    }
}