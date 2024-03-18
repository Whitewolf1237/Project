import React from "react";
import { useRouteError } from "react-router-dom";
import errorImage from "./img/eror.jpg"

const Error=()=>{

    const err=useRouteError();
    console.log(err)
    
    return(
        <div className="error">
            <img src={errorImage}/>
        </div>
    )
}

export default  Error