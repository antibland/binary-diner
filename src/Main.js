import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import Menu from './Menu';

const Warning = styled.p`
  font-size: 0.9rem;
  text-align: center;
  padding: 3rem 0 1rem;
`;

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/menu/:componentName" component={MenuItem} />
      </Switch>
      <Warning>
        Consuming raw or undercooked <code>JavaScript</code>, <code>CSS</code>{' '}
        or <code>HTML</code> may increase your risk of codeborne illness.
      </Warning>
    </main>
  );
}

export default Main;
