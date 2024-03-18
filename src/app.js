
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import { createBrowserRouter,RouterProvider,Outlet  } from "react-router-dom";
import Error from './components/error';
import Availclass from './components/Availclass';

document.body.style.backgroundColor = "#f2f9f4"


const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<PageOne />
            },    
],
errorElement:<Error/>
    },
    {
        path:"/pageone",
        element:<PageOne />
    },

])

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />);