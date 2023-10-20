import {useContext} from "react";
import {ContextStorage} from "../App";


function Footer(props) {
    const {contextId, setContextId} = useContext(ContextStorage);
    const{name, year} = props;

    let activeTaskCount = JSON.parse(localStorage.getItem("Backlog"))?.length || 0;
    let finishedTaskCount = JSON.parse(localStorage.getItem("Finished"))?.length || 0;


    return (
        <footer className={"footer wrapper"}>
            <div className={"taskInfoWrapper"}>
                <span className={"activeTasks"}>Active tasks: {activeTaskCount}</span>
                <span>Finished tasks: {finishedTaskCount}</span>
            </div>
            <span>Kanban board by {name}, {year}</span>
        </footer>
    )
}
export default Footer;
