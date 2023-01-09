import React, { Component } from "react";

import Tabber from "./tabber";
import Home from './home';
import List from './list';
import Form from './form';

import './style.css';



class Navbar extends Component {
    render(){
        return(
            <nav>
                <button className="leftBtn">Back</button>
                <span>Navbar Name</span>
                <button className="rightBtn" onClick={() => this.props.event() }>Form</button>
            </nav>
        )
    }
}

export default class Card extends Component {
    state={
        currentId: 1,
        list: [
            { id: 1, text: 'home' },
            { id: 2, text: 'list' },
            { id: 3, text: 'form' },
        ],
    }
    handleClickTabbar(id){
        this.setState({ currentId: id })
    }
    whichPage(){
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
    goFormPage(){
        this.setState({currentId: 3})
    }
    render(){
        return(
            <React.Fragment>
                <Navbar event={() => this.goFormPage()}/>
                { this.whichPage() }
                <Tabber event={(id) => this.handleClickTabbar(id)} currentId={this.state.currentId} list={this.state.list}/>
            </React.Fragment>
        )
    }
}