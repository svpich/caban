
function Header() {
    return (
        <header className={"header wrapper"}>
            <h1>Awesome Kanban Board</h1>
            <div className={"header__avatar-wrapper"}>
                <img src="/user-avatar.png" alt={"avatar"}/>
                <img src="/arrow_down.svg" alt={"click"}/>
            </div>
        </header>
    )
}

export default Header;