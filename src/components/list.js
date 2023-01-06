import React, { Component, createRef } from "react";

export class List extends Component {
  constructor(){
    super()
    this.state = {
      contents: []
    }    
  }
  addContent(value){
    this.setState({ contents: this.state.contents.push(value) })
  }
  render(){
      let inputRef = createRef;
      return(
          <div>
              <input ref={inputRef} type="text" />
              <button onClick={ () => this.addContent(this.inputRef.value) }>Add</button>
          </div>
      )
  }
}