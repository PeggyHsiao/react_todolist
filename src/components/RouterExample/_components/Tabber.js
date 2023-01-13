import React from 'react';
import { NavLink } from 'react-router-dom';
import './tabber.css';

export default function Tabber() {
    return(
        <ul className='tabber'>
            <li><NavLink to='/home/note1'>Note1</NavLink></li>
            <li><NavLink to='/home/note2'>Note2</NavLink></li>
        </ul>
    )
}