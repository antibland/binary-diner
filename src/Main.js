import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import Menu from './Menu';

const Contribute = styled.p`
  margin: 0 auto;
`;

const Warning = styled.p`
  font-size: 0.9rem;
  text-align: center;
  padding: 3rem 0 1rem;
  font-style: italic;
`;

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/menu/:componentName" component={MenuItem} />
      </Switch>
      <>
        <Contribute>
          What‘s your best dish? Why not{' '}
          <a
            href="https://github.com/antibland/binary-diner#user-content-contributing"
            rel="noopener noreferrer"
            className="standard"
          >
            add it to the menu
          </a>
          ?
        </Contribute>
      </>
      <Warning>
        Consuming raw or undercooked <code>JavaScript</code>, <code>CSS</code>{' '}
        or <code>HTML</code> may increase your risk of codeborne illness.
      </Warning>
      <iframe
        title="GitHub Stars"
        src="https://ghbtns.com/github-btn.html?user=antibland&repo=binary-diner&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
        style={{ margin: '0 auto' }}
      />
    </main>
  );
}

export default Main;
