import React from "react";


const Availclass=(props)=>{
    return(
        <div className="classCard">
            <div className="classImg">
                <img src={props.img} />
            </div>
            <div className="className">
                <h1>{props.name} </h1>
            </div>
            <div className="classDetail">
                <p>Lorem ipsum is placeholder text commonly used in the graphic.</p>
            </div>
        </div>
    )
}

export default Availclass