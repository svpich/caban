import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function CardPage(props) {
    const [content, setContent] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const taskTitle = location.state?.taskTitle;


    function handleClick() {
        navigate(-1);
    }

    function handleTestArea({value: value}) {
        setContent(value);
    }

    return (
        <div className={"cardPage"}>
            <div className={"cardPage_wrapper"}>
                <h2 className={"cardPage_taskTitle"}>{taskTitle}</h2>
                <span className={"backBtn"} onClick={handleClick}>X</span>
            </div>
            <textarea className={"cardPage-textArea"} placeholder={"This task has no description"} value={content} onChange={handleTestArea}/>
        </div>
    )

}

export default CardPage;