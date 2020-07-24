import React, { useState, useEffect } from "react";
import Axios from "axios";
import NewTweet from "./../NewTweet";
import Tweet from "./../Tweet";
import Loading from "./../../common/Loading";
import "./index.css";

function Tweets() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [tweets, setTweets] = useState("");
  const [loading, setLoading] = useState(true);

  const loadTweets = () => {
    if(hasMore){
      setLoading(true);
      setTimeout(()=>{

        const url = `${process.env.REACT_APP_API_URL}/api/tweets?page=${currentPage}&limit=5`;
        Axios.get(url).then((response) => {
          setHasMore(response.data.hasMore);
          setTweets([...tweets, ...response.data.tweets]);
          setCurrentPage(currentPage + 1);
          setCount(response.data.count);
          setLoading(false);
        });

      }, 500);
    }else{
      setLoading(false);
    }
  };

  const deleteTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet._id !== id));
  };

  const isScrolling = () => {
    if (
      Math.round(window.innerHeight + document.documentElement.scrollTop) !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    if(hasMore)
      setLoading(true);
  };

  useEffect(() => {
    loadTweets();
    window.addEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    if (loading) loadTweets();
  }, [loading]);

  return (
    <>
      <NewTweet setTweets={setTweets} tweets={tweets} />
      {loading &&
        <Loading />
      }
        <div className="tweets">
          {tweets ? (
            <div>
              {tweets.map((tweet) => (
                <Tweet
                  key={tweet._id}
                  tweet={tweet}
                  deleteTweet={deleteTweet}
                />
              ))}
              <p className="more">
              {loading ? 
                <span>cargando tweets ...</span>
               : 
              <span>Mostrando <strong>{tweets.length} de {count}</strong> tweets</span>
              }
              </p>
            </div>
          ) : (
            <p>No hay tweets para mostrar</p>
          )}
        </div>
      
    </>
  );
}
export default Tweets;
