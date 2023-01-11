import React, { useCallback, useState } from "react";

const App = () => {
    const [list, setList] = useState([])
    const [text, setText] = useState('')

    // const handleAdd = () => {
    //     if(text === '') return
    //     setList([...list, text])
    //     setText('')
    // }
    const handleAdd = useCallback(() => {
        if(text === '') return
        setList([...list, text])
        setText('')
    },[text, list])

    // const handleDelete = (index) => {
    //     let newList = [...list];
    //     newList.splice(index, 1);

    //     setList(newList)
    // }
    const handleDelete = useCallback((index) => {
        let newList = [...list];
        newList.splice(index, 1);

        setList(newList)
    },[list])
    return(
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>

            <ul>
                {
                    list.map((i, index) => <li key={index}>{i}&nbsp;<button onClick={() => handleDelete(index)}>Delete</button></li>)
                }
            </ul>
        </div>
    )
}

export default App