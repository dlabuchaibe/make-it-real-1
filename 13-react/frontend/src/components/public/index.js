import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import PasswordRecovery from './PasswordRecovery';

function Public(props) {
  return (
        <Container>
                <Switch>
                    <Route exact path="/" component={Home}  />
                    <Route path="/signin" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/passwordRecovery" component={PasswordRecovery} />
                </Switch>
        </Container>   
  );
}

export default Public;



