import "./heder.css";

function DropDownUserMenu() {


    return (
        <div className={"dropDownWrapper"}>
            <div className={"triangle"}></div>

            <ul className={"dropDownWrapper_linkWrapper"}>
                <li>Profile</li>
                <li>Log Out</li>
            </ul>
        </div>
    )
}

export default DropDownUserMenu;