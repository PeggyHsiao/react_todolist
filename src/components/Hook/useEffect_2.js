import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Child = (props) => {
    const { type } = props;

    const [list, setList] = useState([]);

    useEffect(() => {
        if(type === 'name') {
            axios.get('./test.json').then(res => {
                setList(res.data.map(i => ({ text: `${i.last_name}_${i.first_name}`, id: i.id })))
            })
        } else if(type === 'mail') {
            axios.get('./test.json').then(res => {
                setList(res.data.map(i => ({ text: i.email, id: i.id })))
            })
        }
    }, [type])
    // 第二個參數存放要被監控的參數，當該參數變動則執行第一參數的方法

    return(
        <ul>
            { list.map(i => <li key={i.id}>{i.text}</li>)}
        </ul>
    )
}

const App = () => {
    const [type, setType] = useState('name')

    return(
        <div>
            <ul>
                <li onClick={() => setType('name')}>Name list</li>
                <li onClick={() => setType('mail')}>E-mail list</li>
            </ul>

            <Child type={type}/>
        </div>
    )
}

export default App