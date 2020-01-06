import React from 'react';
import { UIProvider } from '../../context';
import Description from '../description';
import Main from '../main';
import { Page, globalStyles } from '../../styles';


function App() {
    return (
        <div className="App">
            <globalStyles>
                <UIProvider>
                    <Page>
                        <Description />
                        <Main />
                    </Page>
                </UIProvider>
            </globalStyles>
        </div>
    );
}

export default App;
