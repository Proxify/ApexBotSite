import logo from '../resources/apex_logo.svg';
import '../App.css';
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";

function Header(props) {
    const bots = props.bots;
    const location = useLocation();
    const selectedBot = location.pathname.replace('/bots/', '');
    const navigate = useNavigate();

    const botItems = () => {
        return bots.map(element => {
            const className = selectedBot === element ? "App-header-bot-item-selected" : "App-header-bot-item";
            return <button className={className} key={element} onClick={() => navigate(`/bots/${element}`)}>{element}</button>
        });
    }
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="ApexBots" onClick={() => navigate('/')}/>

            <div className="App-header-separator"></div>
            <div className="App-header-bots">
                {botItems()}
            </div>
        </header>
    );
}

export default Header;
