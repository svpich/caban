import DropDownUserMenu from "./DropDownUserMenu";
import {useState} from "react";

function Header() {
    const [showUserMenuLink, setShowUserMenuLink] = useState(false);

    function userMenuHandler() {
        setShowUserMenuLink(!showUserMenuLink);
    }

    return (
        <header className={"header wrapper"}>
            <h1>Awesome Kanban Board</h1>
            <div className={"header__avatar-wrapper"}>
                <img src="/user-avatar.png" alt={"avatar"}/>
                <div className={"userImgWrapper"} onClick={userMenuHandler}>
                    <img className={showUserMenuLink ? "arrowUserMenu" : "arrowUserMenuRevert"} src="/arrow_down.svg" alt={"click"}/>
                    {showUserMenuLink ? <DropDownUserMenu /> : null }
                </div>

            </div>
        </header>
    )
}

export default Header;