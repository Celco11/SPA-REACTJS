import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from '../components/home/Home';
import Contas from '../components/user/Contas';

export default props =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contas" component={Contas} />
        <Redirect from="*" to="/" />
    </Switch>

