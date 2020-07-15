import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

function Tweet(props) {

  return (
      <ul className="tweet">
        <li><Link to="/">@{props.tweet.user.username.toLowerCase()} </Link>· {new Date(props.tweet.createdAt).toLocaleString("es-CO")}</li>
        <li>{props.tweet.content}</li>
      </ul>
  );
}

export default Tweet;
