import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('./testData/navbar.json').then((res) => {
            setList(res.data)
        })
    }, [])

    return(
        <ul className='navbar'>
            { list.map(item => 
            <li key={item.name}>
                <NavLink to={`/${item.name.toLowerCase()}`}>{item.name}</NavLink>
            </li>) }
        </ul>
    )
}