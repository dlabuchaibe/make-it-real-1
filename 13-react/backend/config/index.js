const config = {
    server: {
        port: process.env.SERVER_PORT
    },
    db: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    },
    weatherApiKey:process.env.WEATHER_API_KEY,
    saltRounds: process.env.SALT_ROUNDS,
    tokenKey: process.env.TOKEN_KEY
}
module.exports = config;