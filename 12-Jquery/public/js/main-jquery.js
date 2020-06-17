$(document).ready(() => {
    getWeather('Barranquilla');
    checkLogin();
    getTweets();
    
    $('#logout').click(()=>{
        logout();
    });
    $('#btn-login').click(()=>{
        const user = {
            username: $('#login-username').val(),
            password: $('#login-password').val()
        };
        login(user);
    });
    
    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
});

const getWeather = (city) => {
    const url = `/api/weather/${city}`;
    $.ajax({
        method: 'GET',
        url: url
    })
    .done((data)=>{
        $('#weather').addClass('alert-primary').html(`El clima de ${city} es ${data.temp}`);
    })
    .fail(()=>{
        $('#weather').addClass('alert-danger').html('ocurrió un error');
    });
};

const checkLogin = () => {
    const token = localStorage.getItem('token');
    if(token === null){
        $('#card-login').show();
        $('#card-signup').show();
    }else{
        $('#card-tweets').show();
        $('#logout').show();
    }
};

const logout = () =>{
    localStorage.removeItem('token');
    $('#card-tweets').hide();
    $('#logout').hide();
    $('#card-login').show();
    $('#card-signup').show();
};

const login = (user) => {
    const url = '/api/users/login';
    $.ajax({
        method: 'POST',
        url: url,
        data: JSON.stringify(user),
        contentType: 'application/json'
    })
    .done(data=>{
        localStorage.setItem('token', data.token);
        $('#card-login').hide();
        $('#card-signup').hide();
        $('#card-tweets').show();
        $('#logout').show();
    })
    .fail(()=>{
        alert('Autenticación no válida');
    })
    .always(()=>{
        $('login-password').val('');
    })
};


const getTweets = () => {
    const url = '/api/tweets/';
    $.ajax({
        method: 'GET',
        url: url
    })
    .done((data)=>{
        const html = data.map(tweet => {
            return `<li class="list-group-item">
                                             <a href="/tweets.html?id=${tweet._id}">${tweet.content}</a>
                                             <br /><small>${tweet.createdAt}</small>
                                             <br /><small>${tweet.user.name}</small>
                     </li>`
         }).join(" ");
         $('#tweets').html(`<ul class="list-group">
                                <li class="list-group-item active">Tweets</li>
                                ${html}
                                </ul>`);
    })
    .fail(()=>{
        console.log('Ocurrió un error');
    });
};