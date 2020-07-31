import React, { useState, useContext } from "react";
import { useToasts } from 'react-toast-notifications';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

import {AuthContext} from './../../../contexts/AuthContext';
import "./index.css";

function NewTweet(props) {
  const auth = useContext(AuthContext);
  const { addToast } = useToasts();
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (event) => {
    const file = event.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setImage(reader.result);
      },
      false
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = () => {
    if (content) {
      const maxCaracteres = 230;
      if (content.length <= maxCaracteres) {
        if (content.length > 0) {
          const token = auth.user.token;
          const username = auth.user.username;
          const id = auth.user.id;
          const tweet = {
            content,
            image,
          };
          const url = `${process.env.REACT_APP_API_URL}/api/tweets`;
          axios
            .post(url, tweet, {
              headers: {
                "content-type": "application/json",
                "x-access-token": token,
              },
            })
            .then((response) => {
              const newTweet = {
                _id: response.data._id,
                content,
                image,
                comments: [],
                createdAt: response.data.createdAt,
                user: {
                  username:username,
                  _id: id
                }
              }
              props.setTweets([ newTweet,...props.tweets]);
              setContent("");
              setImage("");
            });
        } else {
          addToast("Debes ingresar un texto", {
            appearance: 'error',
            autoDismiss: true,
          });
        }
      } else {
        addToast("Error", {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    }
  };

  return (
    <div className="new-tweet">
      <p className="title">Inicio</p>
      <Form className="">
        <Form.Group controlId="">
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="¿Qué está pasando?"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="">
          <Col md={12} xs={12}>
          {image && <img src={image} alt="image" className="image" />}
            </Col>
        </Form.Group>
        <Row>
          <Col md={9} xs={9}>
            
            <Form.Group controlId="" className="file-group">
              <Form.File
                id="image"
                label={<span className="icon-image"></span>}
                onChange={(event) => {
                  handleImage(event.target);
                }}
              />
            </Form.Group>
          </Col>
          <Col md={3} xs={3}>
            <Button
              onClick={() => {
                handleSubmit();
              }}
              variant="primary"
              type="button"
              className="button-rounded"
              disabled={!content}
            >
              Twittear
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default NewTweet;
