// import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Gnb from './components/Gnb';
import { useUserState } from './context/UserContext';
import Router from './router/Router';

function App() {
    const state = useUserState();
    // const state = useContext(UserContext);
    // if (!state) return;

    useEffect(() => {
        console.log('$$$$$$', state);
    }, [state]);

    return (
        <div>
            <Gnb />
            <Router />
        </div>
    );
}

export default App;
