import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import Navbar  from './Navbar';
import Sidebar from './Sidebar';
import ToDoList from '../todolist';
// import Home from './home';
// import List from './list';
// import Form from './form';


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

                <Navbar />
                <ToDoList />
            </React.Fragment>
        )
    }
}

export default Card