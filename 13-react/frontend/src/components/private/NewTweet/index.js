import React, { useState } from "react";
import { useToasts } from 'react-toast-notifications';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import "./index.css";

function NewTweet(props) {
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
          const token = localStorage.getItem("token");
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
            .then((data) => {
              props.setTweet(content);
              setContent("");
              setImage("");
              addToast("Tweet enviado", {
                appearance: 'success',
                autoDismiss: true,
              });
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
          {image && <img src={image} alt="image" className="image" />}
        </Form.Group>
        <Row>
          <Col md={9} xs={9}>
            <Form.Group controlId="">
              <Form.File
                id="image"
                label
                custom
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
              className="float-right"
              disabled={!content}
            >
              Enviar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default NewTweet;
