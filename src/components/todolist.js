import React, { Component } from "react";

export default class List extends Component {
  // inputRef = createRef();

  constructor(){
    super()
    this.state = {
      contents: [
        {
          text: 'aaaa', isChecked: true
        }
      ],
      htmlCode: `<h1>To Do List</h1>`,
      newItem: ''
    }    
  }

  addContent(value){
    if(value === '') return;

    // 非受控組件
    // let newList = [...this.state.contents];
    // newList.push(value);

    // this.setState({ contents: newList });
    // this.inputRef.current.value = '';

    // 受控組件
    let newList = [...this.state.contents];
    newList.push({ text: this.state.newItem, id: this.state.contents.length, isChecked: false });

    this.setState({ contents: newList, newItem: '' });
  }
  chageChecked(index) {
    let newList = [...this.state.contents];
    newList[index].isChecked = !this.state.contents[index].isChecked;

    this.setState({ contents: newList })
  }
  removeContent(index){
    let newList = [...this.state.contents];
    newList.splice(index, 1)
    this.setState({ contents: newList });
  }

  render(){
      return(
          <div>
              <span dangerouslySetInnerHTML={{ __html: this.state.htmlCode }}></span>

              {/* 非受控組件 */}
              {/* <input ref={this.inputRef} type="text" />
              <button onClick={ () => this.addContent(this.inputRef.current.value) }>Add</button>
              
              <ul>
                  {
                      this.state.contents.map((item, index) => 
                        <li key={index}>{item}&emsp;<button onClick={ () => { this.removeContent(index) }}>Delete</button></li>
                      )
                  }
              </ul> */}


              {/* 受控組件 */}
              <input type="text" value={this.state.newItem} onChange={(e) => this.setState({ newItem: e.target.value })}/>
              <button onClick={ () => this.addContent() }>Add</button>
              
              <ul>
                  {
                      this.state.contents.map((item, index) => 
                          <li key={index} style={{ textDecoration: item.isChecked ? "line-through" : "" }}>
                          <input type="checkbox" checked={item.isChecked} onChange={() => this.chageChecked(index)}/>{item.text}&emsp;<button onClick={ () => { this.removeContent(index) }}>Delete</button></li>
                      )
                  }
              </ul>
              
              {
                !this.state.contents.length && <p>No data.</p>
              }              
          </div>
      )
  }
}