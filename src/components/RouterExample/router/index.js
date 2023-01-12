import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../_pages/Home';
import Product from '../_pages/Product';
import Detail from '../_pages/Detail';
import Shopping from '../_pages/Shopping';
import Login from '../_pages/Login';
import NotFound from '../_pages/NotFound';

// 模擬該元件需要有token的狀況
function isAuth() {
    return true
}

export default function RootRouter(props) {
    return(
        <HashRouter>
            { props.children }
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/product" component={Product} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/shopping" render={() => {
                    return isAuth() ? <Shopping/> : <Redirect to="/login" />
                }} />

                <Redirect from="/" to="/home" exact/>
                <Route component={NotFound}/>
            </Switch>
        </HashRouter>
    )
}