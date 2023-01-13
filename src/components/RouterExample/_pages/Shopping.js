import React from 'react';
import { withRouter } from 'react-router-dom';

// 透過withRouter傳入props
function Shopping(props) {
    return(
        <div>
            <h1>Shopping</h1>
            <button onClick={() => props.history.push('/home')}>Go to HOME</button>
        </div>
    ) 
}

export default withRouter(Shopping)