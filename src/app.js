
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import PageOne from './components/PageOne';

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <PageOne />
        </div>
    )
}

let App = document.getElementById('app');

ReactDOM.render(<AppLayout />,App);