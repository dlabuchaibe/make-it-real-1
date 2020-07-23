import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import UserTimeline from './UserTimeline';
import Comments from './Comments';
import Profile from './Profile';
import Footer from './Footer';

function Private(props) {
    
  return (
    <div>
        <Header logout={props.logout} />
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/profile" component={Profile} />
          <Route path="/users/:username" component={UserTimeline} />
          <Route path="/tweets/:tweet" component={Comments} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default Private;
