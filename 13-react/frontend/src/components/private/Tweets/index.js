import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import NewTweet from './../NewTweet';
import Tweet from './../Tweet';
import Loading from './../../common/Loading';
import './index.css';

function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState('');
  const [loading, setLoading] = useState(true);
  
  const loadTweets = () => {
    const url = `${process.env.REACT_APP_API_URL}/api/tweets`;
      Axios.get(url)
      .then(response=>{
        setTweets(response.data);
        setLoading(false);
      }  
      );
  }

  useEffect(()=>{
    loadTweets();
  },[tweet]);

  return (
    <>
      <NewTweet setTweet={setTweet} />
      {
        loading ? 
          <Loading />
        :  
          <div className="tweets">
          {
            tweets ? 
              tweets.map(tweet=><Tweet key={tweet._id} tweet={tweet} />)
            :
              <p>No hay tweets para mostrar</p>
          }
          </div>
      }
        
    </>
  );
}

export default Tweets;
