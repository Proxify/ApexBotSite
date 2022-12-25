import logo from '../resources/apex_logo.svg';
import '../App.css';

function Header(props) {
    const bots = props.bots;
    const selectedBot = props.selectedBot;

    const botItems = () => {
        return bots.map(element => {
            //console.log({selectedBot});
            //console.log({element});
            const className = selectedBot === element ? "App-header-bot-item-selected" : "App-header-bot-item";
            return <button className={className} onClick={() => props.clickEvent(element)}>{element}</button>
        });
    }
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="ApexBots" onClick={() => props.clickEvent("Home")}/>

            <div className="App-header-separator"></div>
            <div className="App-header-bots">
                {botItems()}
            </div>
        </header>
    );
}

export default Header;
