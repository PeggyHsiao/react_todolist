import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
// import Home from './home';
// import List from './list';
// import Form from './form';

import '../css/card.css';
class Navbar extends Component {
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

class Page extends Component {
    static propTypes = {
        title:PropTypes.string
    }
    static defaultProps = {
        title: 'default title'
    }
    render() {
        const { title } = this.props;
        return (
            <h2>{title}</h2>
        )
    }
} 

class Card extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Page />
            </React.Fragment>
        )
    }
}

export default Card