import '../App.css';
import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLocation } from 'react-router';

function MainContent(props) {
    const location = useLocation();
    const selectedBot = location.pathname.replace('/bots/', '');
  
    const [ markdownContent, setMarkdownContent] = useState({md: ""});
    
    useEffect(()=> {
        fetch(process.env.PUBLIC_URL + `/bots/${selectedBot}.md`)
            .then((res) => res.text())
            .then((md) => {
            setMarkdownContent({ md })
            })
    }, [selectedBot])

    const mdF = (md) => {
        return (
            <div className="markdown-holder">
                <ReactMarkdown className="markdown-content" children={md} remarkPlugins={[remarkGfm]} />
            </div>
        )
    }

    const render = () => {
        //console.log(`Selected Bot: ${selectedBot}`);
        return mdF(markdownContent.md);
    }

    return render();
}

export default MainContent;
