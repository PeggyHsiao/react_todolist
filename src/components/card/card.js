import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import Sidebar from './sidebar';
import Home from './home';
import List from './list';
import Form from './form';
import './navbar.css';


class PageTitle extends Component {
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
    whichPage() {
        switch (this.state.currentId) {
            case 1:
               return <Home/>
            case 2:
                return <List/>
            case 3:
                return <Form/>
            default:
                return null;
        }
    }
    render() {
        const propsObj = {
            baColor: 'yellow',
            width: 100
        }
        return (
            <React.Fragment>
                <PageTitle />

                {/* <Sidebar baColor="yellow"/> */}
                <Sidebar {...propsObj} />

                <ul className='pageUl'>
                    {
                        this.state.navlist.map(i =>
                            <li key={i.id} className={this.state.currentId === i.id ? 'active' : ''} onClick={() => { this.changePage(i.id) }}>{i.text.toUpperCase()}</li>)
                    }
                </ul>

                { this.whichPage() }
            </React.Fragment>
        )
    }
}

export default Card