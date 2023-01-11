import React, { useState, useRef } from "react";

const App = () => {
    const inputRef = useRef();
    const [list, setList] = useState(['aaa']);

    const addListItem = () => {
        setList([...list, inputRef.current.value]);
        inputRef.current.value = '';
    }

    const deleteListItem = (index) => {
        const newlist = [...list];
        newlist.splice(index, 1)

        setList(newlist);
    }

    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={addListItem}>Add</button>
            <ul>
                { list.map((i,index) => <li key={index}>{i}&emsp;<button onClick={() => deleteListItem(index)}>Delete</button></li>) }
            </ul>
            { !list.length && <span>No Data.</span> }
        </div>
    )
}

export default App