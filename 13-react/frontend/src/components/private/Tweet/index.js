import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import './index.css';

function Tweet(props) {
  const [likes, setLikes] = useState(0);

  useEffect(()=>{
    setLikes(props.tweet.likes);
  }, [])

  const sendLike = () => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_API_URL}/api/tweets/like`;
    const tweet = {
      id : props.tweet._id
    }
    Axios
      .post(url, tweet, {
        headers: {
          "content-type": "application/json",
          "x-access-token": token,
        },
      })
      .then((data) => {
        setLikes(likes+1);
      });
  }

  return (
      <ul className="tweet">
        <li><Link to={`/users/${props.tweet.user.username.toLowerCase()}`}>@{props.tweet.user.username.toLowerCase()} </Link>· {new Date(props.tweet.createdAt).toLocaleString("es-CO")}</li>
        <li>{props.tweet.content}</li>
        { props.tweet.image &&
          <li><img className="image" src ={props.tweet.image} alt="imagen" /></li>
        } 
        <li className="icons">
            <a><span className="icon icon-bubble"></span></a>
            <a onClick={()=>{sendLike()}}>{likes ? likes : 0} <span className="icon icon-heart"></span></a>
            <a><span className="icon icon-bin"></span></a>
            </li>
      </ul>
  );
}

export default Tweet;
