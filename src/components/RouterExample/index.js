import React from 'react';
import RootRouter from './router';

import Navbar from './_componets/Navbar';
export default function App() {
    return(
        <React.Fragment>
            <RootRouter>
                
                {/* 放在Router中間才可以使用NavLink */}
                <Navbar/>
            </RootRouter>
        </React.Fragment>
    )
}