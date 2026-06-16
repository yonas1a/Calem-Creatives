import React, { useState, useEffect } from 'react';

function OnlyFrontendCounter() {
  const [username, setUsername] = useState('khaby.lame');
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    const fetchTikTokData = async () => {
      try {
        // 1. Target TikTok Profile URL
        const targetUrl = `https://www.tiktok.com/@${username}`;
        
        // 2. Prepend the free CORS Proxy platform URL
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
        
        const response = await fetch(proxyUrl);
        const json = await response.json();
        
        // json.contents contains the raw HTML string of the TikTok profile
        const htmlString = json.contents;

        // 3. Extract the data object using a Regex match
        const regex = /"followerCount":(\d+)/;
        const match = htmlString.match(regex);

        if (match && match[1]) {
          setFollowers(parseInt(match[1], 10));
        }
      } catch (err) {
        console.error("Failed fetching purely from frontend:", err);
      }
    };

    fetchTikTokData();
    const interval = setInterval(fetchTikTokData, 15000); // Poll every 15 seconds
    return () => clearInterval(interval);
  }, [username]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="username" />
      <h1>@{username}</h1>
      <h2>{followers ? followers.toLocaleString() : 'Loading...'}</h2>
    </div>
  );
}
export default OnlyFrontendCounter;