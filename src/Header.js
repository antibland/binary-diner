import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import utilities from './utilities';

const HeaderWrap = styled.header`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderH1 = styled.h1`
  font-family: 'Galada';
  color: var(--red);
  font-size: 2.2rem;
  font-style: italic;
  line-height: 1;
  padding-top: 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  ${utilities.media.small`
    font-size: 3.5rem;
  `}

  ${utilities.media.medium`
    font-size: 4.5rem;
  `}

  ${utilities.media.large`
    font-size: 6rem;
  `}
`;

const HeaderH2 = styled.h2`
  text-transform: uppercase;
  letter-spacing: -1px;
  word-spacing: 4px;
  font-size: 1rem;
`;

function Header() {
  return (
    <HeaderWrap>
      <HeaderH1>
        <NavLink to="/">* Mel’s Binary Diner *</NavLink>
      </HeaderH1>
      <HeaderH2>Third Time's a Charm</HeaderH2>
    </HeaderWrap>
  );
}

export default Header;
