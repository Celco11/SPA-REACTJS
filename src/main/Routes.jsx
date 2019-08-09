import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import ProdutosListPage from '../components/ProdutosListPage';

const Routes = () =>
    <Switch>
        <Route path="/" component={ProdutosListPage} />
        <Redirect from="*" to="/" exact/>
    </Switch>
export default Routes;

