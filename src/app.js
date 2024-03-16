
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
        </div>
    )
}

let App = document.getElementById('app');

ReactDOM.render(<AppLayout />,App);