import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./index.css";

function Tweet(props) {
  const [likes, setLikes] = useState(0);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    setLikes(props.tweet.likes);
  }, []);

  const sendLike = () => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_API_URL}/api/tweets/like`;
    const tweet = {
      id: props.tweet._id,
    };
    Axios.post(url, tweet, {
      headers: {
        "content-type": "application/json",
        "x-access-token": token,
      },
    }).then((data) => {
      setLikes(likes + 1);
    });
  };
  const deleteTweet = () => {
    const token = localStorage.getItem("token");
    const url = `${process.env.REACT_APP_API_URL}/api/tweets`;
    const tweet = {
      id: props.tweet._id,
    };
    Axios.delete(url, tweet, {
      headers: {
        "content-type": "application/json",
        "x-access-token": token,
      },
    }).then((data) => {});
  };

  return (
    <ul className="tweet">
      <li>
        <Link to={`/users/${props.tweet.user.username.toLowerCase()}`}>
          @{props.tweet.user.username.toLowerCase()}{" "}
        </Link>
        · {new Date(props.tweet.createdAt).toLocaleString("es-CO")}
      </li>
      <li>{props.tweet.content}</li>
      {props.tweet.image && (
        <li>
          <img className="image" src={props.tweet.image} alt="imagen" />
        </li>
      )}
      <li className="icons">
        <a className="icon">
          <span className="icon-bubble"></span>{" "}
          {props.tweet.comments ? props.tweet.comments.length : 0}{" "}
        </a>
        <a
          className="icon"
          onClick={() => {
            sendLike();
          }}
        >
          <span className="icon-heart"></span> {likes ? likes : 0}{" "}
        </a>
        {props.tweet.user._id === userId && (
          <a
            className="icon"
            onClick={() => {
              deleteTweet();
            }}
          >
            <span className="icon-bin"></span>
          </a>
        )}
      </li>
    </ul>
  );
}

export default Tweet;
