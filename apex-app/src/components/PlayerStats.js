import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function PlayerStats() {
  const [htmlContent, setHtmlContent] = useState('');
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const domain = "apexbots.us.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(`Access Token: ${accessToken}`)
  
        const { user_metadata } = await metadataResponse.json();
  
        setToken(accessToken);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getToken();
  }, [getAccessTokenSilently, user?.sub]);

  // useEffect(() => {
  //   const requestOptions = {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email: user.email, digest: "" })
  //   };
  //   fetch('localhost:8080/stats', requestOptions)
  //     .then(response => response.text())
  //     .then(html => setHtmlContent(html));
  // }, []);

  return (
    <div>
      {isAuthenticated && (
        token
    )}
    </div>
  );
}

export default PlayerStats;