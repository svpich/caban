import "./card.css";
import React, {useState} from 'react';
import {Link} from "react-router-dom";


function Card(props) {


    return (
        <Link to={`/test/${props.id}`} state= { {taskTitle: props.taskTitle} } >
            <div className={"cardItem"}>
                {props.taskTitle}

            </div>
        </Link>
    )
}

export default Card;