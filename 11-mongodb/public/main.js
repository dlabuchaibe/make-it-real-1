const login = () => {
    const url = '/api/users/login';
    const user = {
        username: document.getElementById('login-username').value,
        password: document.getElementById('login-password').value
    }
    document.getElementById('login-password').value = '';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(user), 
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res=> res.json())
    .then(response=>{
        if(!!response.token){
            document.getElementById('login-username').value = '';
            alert('Bienvenido!');
        }else{
            alert('Datos inválidos');
        }    
    })
    .catch(err=>{
        alert('Datos inválidos');
    })
};

const newUser = () => {
    console.log('newUser');
    const url = '/api/users';
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    document.getElementById('password').value = '';
    document.getElementById('passwordConfirm').value = '';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(user), 
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res=> res.json())
    .then(response=>{
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('username').value = '';
        alert('Usuario creado!');
    })
    .catch(err=>{
        alert('Ocurrió un erro al crear el usurio');
    })
};

const newTweet = () => {
    //se construye el objeto que se enviará al API
    const tweet = {
        content: document.getElementById('content').value,
        userId: 1
    };
    if(tweet.content!==''){
        //se define la ruta hacia donde se enviará la petición
        const url = '/api/tweets';
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
        });
    }    
};

const getTweets = () => {
    const url = '/api/tweets';
    fetch(url)
    .then(res => res.json())
    .then(response => {
        //se recibe el array de respuesta, se recorre y se arma un string 
        //para mostrar el resultado
        const html = response.map(tweet => {
           return `<li class="list-group-item"><a href="/tweets.html?id=${tweet._id}">${tweet.content}</a><br /><small>${tweet.date}</small></li>`
        }).join(" ");
        //el string construido se agrega en el div con id tweets
        document.getElementById('tweets').innerHTML = `<ul class="list-group">
                                                        <li class="list-group-item active">Tweets</li>
                                                        ${html}
                                                        </ul>`;
    });
};

const getWeather = (city) => {
    document.getElementById('weather').innerHTML = '';
    if(city !== ''){
        const url = `/api/weather/${city}`;
        fetch(url)
        .then(res => res.json())
        .then(response => {
            const html = `El clima de ${city} es ${response.temp}°C`;
            document.getElementById('weather').innerHTML = html;
        });
    }else{
        const html = `Por favor ingrese el nombre de una ciudad`;
        document.getElementById('weather').innerHTML = html;
    }
};