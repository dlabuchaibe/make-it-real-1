import React, { useState, useEffect } from "react";
import Axios from "axios";
import Tweet from "../Tweet";
import { Link, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../../common/Loading";
import "./index.css";

function UserTimeline() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const loadTweets = () => {
    const url = `${process.env.REACT_APP_API_URL}/api/tweets/comments/${params.tweet}`;
    Axios.get(url)
      .then((response) => {
        setTweets(response.data.tweets);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const deleteTweet = (id) => {
    setTweets(tweets.filter((tweet) => tweet._id !== id));
  };

  useEffect(() => {
    loadTweets();
  }, []);

  return (
    <Row className="justify-content-md-center content">
      <Col md={3} xs={12}></Col>
      <Col md={4} xs={12}>
        <p>
          <Link to="/">Regresar</Link>
        </p>
        <h2>Página del tweet {params.tweet}</h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="tweets">
            {tweets ? (
              tweets.map((tweet) => (
                <Tweet
                  key={tweet._id}
                  tweet={tweet}
                  deleteTweet={deleteTweet}
                />
              ))
            ) : (
              <p>No hay tweets para mostrar</p>
            )}
          </div>
        )}
      </Col>
      <Col md={3} xs={12}></Col>
    </Row>
  );
}

export default UserTimeline;
