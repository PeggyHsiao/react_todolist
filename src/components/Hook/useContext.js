import React, { useContext, useEffect, useState } from "react";

const GlobalContext = React.createContext();

function List(props) {
    const { id, text, details } = props;
    const value = useContext(GlobalContext);

    // 使用useContext，消費者無須加上<Consumer>標籤
    return (
            <div style={{ border: '1px solid blue', width: 50, height: 50 }} onClick={() => { 
                    value.changeInfo(details) 
                }}>({id}){text}</div>
    )
}

function Detail() {
    const value = useContext(GlobalContext);

    return <div style={{ border: '1px solid red', float: 'right', width: 200, height: 200 }}>{value.info}</div>

}

export default function App() {
    const [list, setList] = useState([])
    const [info, setInfo] = useState('')

    useEffect(() => {
        // Get list API
        setList([
            { id: 1, text: 'A', details: 'aaaaa' },
            { id: 2, text: 'B', details: 'bbbbb' },
            { id: 3, text: 'C', details: 'ccccc' }
        ])
    }, [])

    return (
        <GlobalContext.Provider value={{ info: info, changeInfo: (info) => { setInfo(info) } }}>
            <div>
                {
                    list.map(i =>  <List key={i.id} {...i} />)
                }
                <Detail/>
            </div>
        </GlobalContext.Provider>
    )
}