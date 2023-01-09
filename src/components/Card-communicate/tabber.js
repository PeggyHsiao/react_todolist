// import React, { Component } from "react";


// Class組件

// class Tabbar extends Component {
//     state = {
//         list: [
//             { id: 1, text: 'home' },
//             { id: 2, text: 'list' },
//             { id: 3, text: 'form' },
//         ],
//         // currentId: 1
//     }
//     clickTabbar(id){
//         this.props.event(id);
//         // this.setState({ currentId: id });
//     }
//     render(){
//         const { currentId } = this.props;
//         return(
//             <ul className='pageUl'>
//                 {/* {
//                     this.state.navlist.map(i =>
//                         <li key={i.id} className={this.state.currentId === i.id ? 'active' : ''} onClick={() => { this.clickTabbar(i.id) }}>{i.text.toUpperCase()}</li>)
//                 } */}

// {
//                 this.state.list.map(i =>
//                     <li key={i.id} className={currentId === i.id ? 'active' : ''} onClick={() => { this.clickTabbar(i.id) }}>{i.text.toUpperCase()}</li>)
//                 }
//             </ul>
//         )
//     }
// }


// 函數是組件
const Tabber = (props) => {
    const { list, currentId } = props;
    return(
         <ul className='pageUl'>
            {
                list.map(i =>
                    <li key={i.id} className={currentId === i.id ? 'active' : ''} onClick={() => { props.event(i.id); }}>{i.text.toUpperCase()}</li>)
                }
        </ul>
    )
}
export default Tabber;