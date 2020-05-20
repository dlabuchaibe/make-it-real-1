const getWeather = () => {
    const city = document.getElementById('city').value;
    if(city!==''){
        fetch(`/api/weather/${city}`)
        .then(res => res.json())
        .then(json=>{
            html = json;
            document.getElementById('weather').innerHTML = `<p>La temperatura de ${city} es ${html}C</p>`;
        });
        document.getElementById('city').value="";
    }    
};
const loadTweets = () => {
    fetch('/api/tweets')
    .then(res => res.json())
    .then(json=>{
        const html = json.map(function(elem, index) {
            return(`<li>
                      ${elem.content}<br />
                      <small>${elem.date}</small>
                    </li>`);
          }).join(" ");
        document.getElementById('tweets').innerHTML = `<ul>${html}</ul>`;
    })
};
const newTweet = () => {
    const tweet = {
        content: document.getElementById('content').value,
        userId: 1
    };
    if(tweet.content!==""){
        fetch('/api/tweets', {
            method: 'POST', 
            body: JSON.stringify(tweet),
            headers:{
            'Content-Type': 'application/json'
            }
        })
        .then(res=>{
            loadTweets()
        });

        document.getElementById('content').value="";
    }    
}