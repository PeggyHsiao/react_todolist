import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

const App = () => {
    const [list, setList] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        axios.get('./test.json').then(res => {
            setList(res.data.map(i => ({id: i.id, email: i.email, ip: i.ip_address})))
        })
    },[])

    const searchList = useMemo(() => 
        list.filter(item => item.email.toUpperCase().includes(keyword.toUpperCase()) || item.ip.toUpperCase().includes(keyword.toUpperCase()))
    , [list, keyword])

    return(
        <div>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value) }/>
            <ul>
                { searchList.map(i => <li key={i.id}>
                    <h3>{i.email}</h3>
                    <p>{i.ip}</p>
                </li>) }
            </ul>
        </div>
    )
}
export default App