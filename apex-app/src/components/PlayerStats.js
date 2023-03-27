import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function PlayerStats() {
  const [htmlContent, setHtmlContent] = useState('');
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user.email, digest: "" })
    };
    fetch('localhost:8080/stats', requestOptions)
      .then(response => response.text())
      .then(html => setHtmlContent(html));
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default PlayerStats;