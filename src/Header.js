import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import utilities from './utilities';

const HeaderWrap = styled.header`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 10vw 0;

  ${utilities.media.small`
    padding: 1rem 15vw 0;
  `}
`;

const LogoImg = styled.img`
  img {
    max-width: 100%;
    width: 498px;
  }
`;

const HeaderH1 = styled.h1`
  a {
    text-decoration: none;
    display: block;
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <HeaderH1>
        <NavLink to="/" title="Mel’s Binary Diner">
          <LogoImg
            src="/logo.png"
            srcSet="/logo.png 1x, /logo@2x.png 2x, /logo@3x.png 3x"
            alt="Mel's Binary Diner logo"
          />
          <span className="visuallyHidden">Mel's Binary Diner</span>
        </NavLink>
      </HeaderH1>
    </HeaderWrap>
  );
}

export default Header;
