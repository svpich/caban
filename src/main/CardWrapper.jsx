import React, { useState, useContext, useEffect } from 'react';
import Card from "./Card";
import {ContextStorage} from "../App";



function CardWrapper(props) {
    // localStorage.clear();
    const [taskTitle, setTaskTitle] = useState("");
    const [contentList, setContentList] = useState([]) // ПЕРЕДавать ключь хранилища как пропс. У каждой карточки будет совое хранилище.
    const [selectData, setSelectData] = useState();
    const [visibleInput, setVisibleInput] = useState(false);
    const {contextId, setContextId} = useContext(ContextStorage);  // TODO берем из контекста
    const [disabledAddBtn, setDisabledAddBtn] = useState(true);
    const [currentStorageNameIsBacklog, setCurrentStorageNameIsBacklog] = useState(false);

    let preStorageName = null;
    let nextStorageName = null;
    let map = {};

    switch (props.storageName) {
        case "Backlog":
            nextStorageName = "Ready";
            break;
        case "Ready":
            preStorageName = "Backlog";
            nextStorageName = "In Progress";
            break;
        case "In Progress":
            preStorageName = "Ready";
            nextStorageName = "Finished";
            break;
        case "Finished":
            preStorageName = "In Progress";
            break;
    }

    map[props.storageName] = JSON.parse(localStorage.getItem(preStorageName));

    function addCard(event) { // тут код по сохранению записи в локлСторэдж
        setVisibleInput(!visibleInput);

        if (!taskTitle && currentStorageNameIsBacklog) {
            return;
        }
        let newItem = {};
        if (visibleInput) {
            if (currentStorageNameIsBacklog) {
                newItem.id = contextId
                newItem.taskTitle = taskTitle;

                setContextId(contextId + 1);
                setTaskTitle("");
            } else {
                newItem.id = selectData.id;
                newItem.taskTitle = selectData.taskTitle;
            }

            setContentList(prevState => prevState.concat({
                newItem
            }));
            localStorage.setItem(props.storageName ,JSON.stringify([
                ...contentList,
                    newItem
            ]
            ));
            if (preStorageName) {
                let arr = JSON.parse(localStorage.getItem(preStorageName));
                let filterArr = arr.filter(e => e.id !== newItem.id);
                localStorage.setItem(preStorageName, JSON.stringify(filterArr));
            }
        }
    }

    function handleChangeAddCardInput({target: {value}}) {
        setTaskTitle(value)
    }
    function handleSwitchCard({target: {value}}) {
        setSelectData(JSON.parse(value));
    }

    useEffect(() => {
        if (map[props.storageName]) {
            setSelectData((map[props.storageName][0]));
        }
    }, [map]);

    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem(preStorageName));
        setDisabledAddBtn(storage && storage.length !== 0);
    }, [map]);

    useEffect(() => {
        setCurrentStorageNameIsBacklog(props.storageName === "Backlog");
    }, []);

    useEffect(() => { // заполняем карточками блоки
       setContentList(JSON.parse(localStorage.getItem(props.storageName)) || []);
    }, [contentList])

    return (
        <div className={"cardWrapper"}>
            <h5 className={"cardWrapperTitle"}>{props.cardWrapperTitle}</h5>
            <div className={"cardWrapper-content"}>
                {contentList?.map((item) => {
                    return <Card id={item.id} taskTitle={item.taskTitle}/>
                })}
            </div>
            {visibleInput && props.storageName === "Backlog" ?
                <input type={"text"} className={"addCardInput"} onChange={handleChangeAddCardInput}/> : null}
            {visibleInput && props.storageName !== "Backlog" ?
                <select className={"selectSwitchCard"} onChange={handleSwitchCard}>
                    {map[props.storageName]?.map(element => {
                        // debugger
                        return <option value={`{"id": ${element.id}, "taskTitle": "${element.taskTitle}"}`}>{element.taskTitle}</option>
                    })}
                </select> : null}
            <input type={"submit"} disabled={!currentStorageNameIsBacklog ? !disabledAddBtn : false} className={`addCardButton ${visibleInput ? "submitBtn" : ""}`} onClick={addCard} value={visibleInput ? "Submit" : "+ addCard"}/>
        </div>
    )
}

export default CardWrapper;