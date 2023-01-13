import React from 'react';
import { Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';

import Tabber from '../_components/Tabber';
import Note1 from '../_pages/Note1';
import Note2 from '../_pages/Note2';

export default function Home() {
    const bannerStyle = {
        height: 200,
        lineHeight: '200px',
        backgroundColor: 'plum',
        textAlign: 'center'
    }
    return(
        <div>
            <div style={bannerStyle}>輪播</div>
            <Tabber/>

            <Switch>
                <Route path="/home/note1" component={Note1} />
                <Route path="/home/note2" component={Note2} />
                <Redirect from='/home' to="/home/note1"/>
            </Switch>
        </div>
    )
}