import React, { useState, useEffect } from "react";
import Axios from "axios";
import Tweet from "../Tweet";
import { Link, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../../common/Loading";
import "./index.css";

function UserTimeline() {
  const [content, setContent] = useState("");
  const [tweet, setTweet] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const loadTweet = () => {
    const url = `${process.env.REACT_APP_API_URL}/api/tweets/comments/${params.tweet}`;
    Axios.get(url)
      .then((response) => {
        setTweet(response.data.tweets[0]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadTweet();
  }, []);

  const handleSubmit = () => {
        if (content.length > 0) {
          const token = localStorage.getItem("token");
          const id = params.tweet;
          const comment = {
            id,
            content
          };
          const url = `${process.env.REACT_APP_API_URL}/api/tweets/comments`;
          Axios
            .post(url, comment, {
              headers: {
                "content-type": "application/json",
                "x-access-token": token,
              },
            })
            .then((response) => {
              tweet.comments.push({_id:Date.now() , userComment: content});
              setTweet(tweet);

              setContent("");
            });
        } 
  };

  return (
    <Row className="justify-content-md-center content">
      <Col md={3} xs={12}></Col>
      <Col md={4} xs={12}>
        <p>
          <Link to="/">Regresar</Link>
        </p>
        {loading ? (
          <Loading />
        ) : (
          <div className="tweets">
            {tweet ? (
              <div>
                <Tweet key={tweet._id} tweet={tweet} delete={false} />
                {tweet.comments.length > 0 ? (
                  tweet.comments.map((comment) => {
                  return comment.userComment && <p key={comment._id} className="comments">{comment.userComment}</p>
                  })
                ) : (
                  <p>No hay comentarios</p>
                )}

                <Form className="">
                  <Form.Group controlId="">
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Comenta algo"
                      value={content}
                      onChange={(event) => {
                        setContent(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Row>
                    <Col md={9} xs={9}></Col>
                    <Col md={3} xs={3}>
                      <Button
                        onClick={() => {
                          handleSubmit();
                        }}
                        variant="primary"
                        type="button"
                        className="float-right"
                        disabled={!content}
                      >
                        Enviar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            ) : (
              <p>La página no existe</p>
            )}
          </div>
        )}
      </Col>
      <Col md={3} xs={12}></Col>
    </Row>
  );
}

export default UserTimeline;
