import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MenuItem from './MenuItem';
import Menu from './Menu';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/menu/:item" component={MenuItem} />
      </Switch>
    </main>
  );
}

export default Main;
