import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

function Tweet(props) {

  return (
      <ul className="tweet">
        <li><Link to={`/users/${props.tweet.user.username.toLowerCase()}`}>@{props.tweet.user.username.toLowerCase()} </Link>· {new Date(props.tweet.createdAt).toLocaleString("es-CO")}</li>
        <li>{props.tweet.content}</li>
        { props.tweet.image &&
          <li><img className="image" src ={props.tweet.image} alt="imagen" /></li>
        } 
      </ul>
  );
}

export default Tweet;
