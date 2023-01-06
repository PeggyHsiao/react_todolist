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
      let newList = [...this.state.contents];
      newList.push(value);

      this.setState({ contents: newList });
      this.inputRef.current.value = '';
  }

  render(){
      
      return(
          <div>
              <input ref={this.inputRef} type="text" />
              <button onClick={ () => this.addContent(this.inputRef.current.value) }>Add</button>
              
              <ul>
                  {
                      this.state.contents.map((item, index) => <li key={index}>{item}</li>)
                  }
              </ul>
          </div>
      )
  }
}