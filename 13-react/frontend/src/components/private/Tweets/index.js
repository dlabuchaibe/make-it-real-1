import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './index.css';

function Tweets() {
  const [tweets, setTweets] = useState([]);
  
  useEffect(()=>{
    const url = `${process.env.REACT_APP_API_URL}/api/tweets`;
    Axios.get(url)
    .then(response=>{
      setTweets(response.data);
    }  
    );
  },[]);

  return (
    <div>
      <h2>Tweets</h2>
      {
        tweets ? 
          tweets.map(tweet=><li key={tweet._id}>{tweet.content}</li>)
        :
          <p>No hay tweets para mostrar</p>
      }
    </div>
  );
}

export default Tweets;
