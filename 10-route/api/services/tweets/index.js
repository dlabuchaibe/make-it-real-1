const tweetsArray = [];

const newTweet = (tweet) => {
    tweetsArray.push(tweet);
};

const loadTweets = () => {
    return tweetsArray;
};

const arrayLenght = ()=> {
    return tweetsArray.length;
};

module.exports = { newTweet, loadTweets, arrayLenght};