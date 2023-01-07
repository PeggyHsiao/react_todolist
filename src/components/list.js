import React, { Component, createRef } from "react";

export default class List extends Component {
  inputRef = createRef();

  constructor(){
    super()
    this.state = {
      contents: []
    }    
  }

  addContent(value){
    if(value === '') return;

      let newList = [...this.state.contents];
      newList.push(value);

      this.setState({ contents: newList });
      this.inputRef.current.value = '';
  }

  removeContent(index){
    let newList = [...this.state.contents];
    newList.splice(index, 1);

    this.setState({ contents: newList });
  }

  render(){
      
      return(
          <div>
              <input ref={this.inputRef} type="text" />
              <button onClick={ () => this.addContent(this.inputRef.current.value) }>Add</button>
              
              <ul>
                  {
                      this.state.contents.map((item, index) => 
                        <li key={index}>{item}&emsp;<button onClick={ () => { this.removeContent(index) }}>Delete</button></li>
                      )
                  }
              </ul>
          </div>
      )
  }
}