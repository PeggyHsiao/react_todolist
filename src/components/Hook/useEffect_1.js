import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
    const [list, setList] = useState([]);

    // 第一個參數: function
    // 第二個參數: 監控參數。([] = 只在創建時執行一次)
    useEffect(() => {
        axios.get('./test.json').then(res => {
            setList(res.data)
        })
    }, [])

    return(
        <ul>
            { list.map(i => <li key={i.id}>{i.email}</li>) }
        </ul>
    )
}

export default App;