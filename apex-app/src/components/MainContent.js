import logo from '../resources/apex_logo.svg';
import '../App.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MainContent(props) {
    const selectedBot = props.selectedBot;
    const md = props.md;

    const home = () => {
        return (
            <div className="home">
                <img src={logo} alt="ApexBots"/>

                <h1>ApexBots</h1>
            </div>
        )
    }

    const mdF = (md) => {
        return (
            <div className="markdown-holder">
                <ReactMarkdown className="markdown-content" children={md} remarkPlugins={[remarkGfm]} />
            </div>
        )
    }

    const render = () => {
        //console.log(`Selected Bot: ${selectedBot}`);
        return selectedBot === "Home" ? home() : mdF(md);
    }

    return render();
}

export default MainContent;
