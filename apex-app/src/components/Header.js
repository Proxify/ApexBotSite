import logo from '../resources/apex_logo.svg';
import '../App.css';
import Login from './Login.js';
import ProfileDropdown from './ProfileDropdown.js'
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Header(props) {
    const bots = props.bots;
    const location = useLocation();
    const selectedBot = location.pathname.replace('/bots/', '');
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading, error } = useAuth0();

    const botItems = () => {
        return bots.map(element => {
            const className = selectedBot === element ? "App-header-bot-item-selected" : "App-header-bot-item";
            return <button className={className} key={element} onClick={() => navigate(`/bots/${element}`)}>{element}</button>
        });
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="ApexBots" onClick={() => navigate('/')}/>

            <div className="App-header-separator"></div>
            <div className="App-header-bots">
                {botItems()}
            </div>
            <div className="App-header-login">
                {error && <p>Error: {error.message}</p>}
                {!error && isLoading && <p>Loading...</p>}
                {!error && !isLoading && (
                    <>
                    {isAuthenticated && (
                        <>
                            <p className='title2'>{user?.name}</p>
                            <ProfileDropdown />
                        </>
                    )}
                    {!isAuthenticated && <Login />}
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
