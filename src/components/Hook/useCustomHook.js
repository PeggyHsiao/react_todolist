import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";

function useGetList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('./test.json').then(res => {
            setList(res.data.map(i => ({id: i.id, email: i.email, ip: i.ip_address})))
        })
    },[])

    return list
}

function useSearchList(list, keyword){
    const searchList = useMemo(() => 
        list.filter(item => item.email.toUpperCase().includes(keyword.toUpperCase()) || item.ip.toUpperCase().includes(keyword.toUpperCase()))
    , [list, keyword])

    return searchList
}

const App = () => {
    const [keyword, setKeyword] = useState('');

    const list = useGetList()
    const getSearchList = useSearchList(list, keyword)

    return(
        <div>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value) }/>
            <ul>
                { getSearchList.map(i => <li key={i.id}>
                    <h3>{i.email}</h3>
                    <p>{i.ip}</p>
                </li>) }
            </ul>
        </div>
    )
}
export default App