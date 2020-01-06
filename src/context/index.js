import React, { createContext, useState } from 'react';


const UIContext = createContext([{}, () => {}]);

const UIProvider = (props) => {
    const [ state, setState ] = useState({
        data: [],
        activated: null,
        activateFunction: null
    });
    return (
        <UIContext.Provider value={[state, setState]}>
            {props.children}
        </UIContext.Provider>
    );
}

export { UIContext, UIProvider };