import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import NewTweet from './../NewTweet';
import Tweet from './../Tweet';
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
      <NewTweet />
      <div className="tweets">
      {
        tweets ? 
          tweets.map(tweet=><Tweet key={tweet._id} tweet={tweet} />)
        :
          <p>No hay tweets para mostrar</p>
      }
      </div>
    </div>
  );
}

export default Tweets;
