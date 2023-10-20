import CardWrapper from "./CardWrapper";
import React from "react";



function Main() {



    return (
        <div className={"main"}>

                <CardWrapper storageName={"Backlog"} cardWrapperTitle={"Backlog"}/>
                <CardWrapper storageName={"Ready"} cardWrapperTitle={"Ready"}/>
                <CardWrapper storageName={"In Progress"} cardWrapperTitle={"In Progress"}/>
                <CardWrapper storageName={"Finished"} cardWrapperTitle={"Finished"}/>

        </div>
    )
}

export default Main;