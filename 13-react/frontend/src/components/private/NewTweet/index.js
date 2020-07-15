import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import "./index.css";

function NewTweet() {
  const [content, setContent] = useState("");
  const handleSubmit = () => {
    if (content) {
      const maxCaracteres = 230;
      if (content.length <= maxCaracteres) {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        };
        const tweet = {
          content: content,
        };
        const url = `${process.env.REACT_APP_API_URL}/api/tweets`;
        axios.post(url, tweet, config).then((response) => {
          NotificationManager.success("Tweet enviado", "Éxito");
        });
      } else {
        NotificationManager.error(
          `El mensaje no puede tener más de ${maxCaracteres} caracteres`,
          "Error"
        );
      }
    }
  };

  return (
    <div className="new-tweet">
      <p className="title">Inicio</p>
      <Form className="">
        <Form.Group controlId="formBasicEmail">
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
      </Form>
      <NotificationContainer />
    </div>
  );
}

export default NewTweet;
