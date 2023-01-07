import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            navlist: [
                { id: 1, text: 'home' },
                { id: 2, text: 'list' },
                { id: 3, text: 'form' },
            ],
            currentId: 1
        }
    }
    changePage(id) {
        this.setState({ currentId: id });
    }
    render() {
        return (
            <ul className='pageUl'>
                {
                    this.state.navlist.map(i =>
                        <li key={i.id} className={this.state.currentId === i.id ? 'active' : ''} onClick={() => { this.changePage(i.id) }}>{i.text.toUpperCase()}</li>)
                }
            </ul>
        )
    }
}