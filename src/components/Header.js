function Header({name,onDarkModeClick}){  
    return (
    <header>
        <h2>{name}'s Shopster</h2>
        <button onClick={onDarkModeClick}>
            {onDarkModeClick ? "Dark" : "Light"} Mode
        </button>
    </header>)}


export default Header