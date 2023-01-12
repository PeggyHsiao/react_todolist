import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')


    const login = () => {
        const info = { username, password };
        console.log(info);

        history.push('/');
    }

    return(
        <div>
            <label>UserName</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)}/>

            <label>Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={() => login()}>Login</button>
        </div>
    )
}