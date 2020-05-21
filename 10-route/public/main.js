const newTweet = () => {
    //se define la ruta hacia donde se enviará la petición
    const url = '/api/tweets';
    //se construye el objeto que se enviará al API
    const tweet = {
        content: document.getElementById('content').value,
        userId: 1
    };
    //se hace la petición con Fetch
    fetch(url, {
        method: 'POST', //se define que es de tipo POST 
        body: JSON.stringify(tweet), //se convierte en String el objeto que se va a enviar
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      //respuesta con error
      .catch(error => console.error('Error:', error))
      //respuesta exitosa
      .then(response => {
          getTweets();
          document.getElementById('content').value = '';
          alert('El tweet ha sido enviado');
      });
};

const getTweets = () => {
    const url = '/api/tweets';
    fetch(url)
    .then(res => res.json())
    .then(response => {
        //se recibe el array de respuesta, se recorre y se arma un string 
        //para mostrar el resultado
        const html = response.map(tweet => {
           return `<p> - ${tweet.content}<br />${tweet.date}</p>`
        });
        //el string construido se agrega en el div con id tweets
        document.getElementById('tweets').innerHTML = html;
    });
};

const getWeather = () => {
    const city = document.getElementById('city').value;
    //console.log(`Consultar el clima de la ciudad ${city}`);
};