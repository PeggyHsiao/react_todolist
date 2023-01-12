import React, { useContext, useReducer } from 'react';

const Global = React.createContext();

const reducer = (oldState, action) => {
    const newState = {...oldState};

    if(action.type === 'child1') {
        newState.value1 += 1;
    } else {
        newState.value2 -= 1;
    }

    return newState
}

const initState = {
    value1: 0,
    value2: 100
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    return(
        <Global.Provider value={{ state, dispatch }}>
            <div>
                <Child0/>

                <Child1/>
                <Child2/>
            </div>
        </Global.Provider>
    )
}

const Child0 = () => {
    const { dispatch } = useContext(Global);

    return(
        <div>
            <button onClick={() => dispatch({ type: 'child1' })}>Add Child1</button>
            <button onClick={() => dispatch({ type: 'child2' })}>Reduce Child2</button>
        </div>
    )
}

const Child1 = () => {
    const { state } = useContext(Global);

    return(
        <p>child1--{state.value1}</p>
    )
}

const Child2 = () => {
    const { state } = useContext(Global);

    return(
        <p>child2--{state.value2}</p>
    )
}
export default App