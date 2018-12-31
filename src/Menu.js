import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import utilities from './utilities';
import data from './menuData';

const MenuList = styled.ul`
  flex-grow: 1;
  ${utilities.media.small`
    column-count: 2;
  `}
`;

const MenuListItemOuter = styled.li`
  margin-bottom: 1.5rem;

  &:last-child {
    display: inline-block;
  }

  p {
    line-height: 1.4;
  }

  img {
    float: left;
    margin: 6px 8px 5px 0;
  }
`;

const MenuListItemInner = styled.li`
  margin-bottom: 1.5rem;
  position: relative;
  cursor: pointer;
  ${utilities.media.medium`
    padding: 0 .5em;
  `}

  &:hover {
    .menuListItemHeaderLink {
      &::after {
        width: 100%;
      }
    }
  }
`;

const MenuListItemWrapperLink = styled(NavLink)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  outline: none;
  &:focus {
    & + h4 .menuListItemHeaderLink {
      &::after {
        width: 100%;
      }
    }
  }
`;

const MenuListItemHeaderLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  text-shadow: 0 1px 1px var(--green);
  font-size: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    border-bottom: 3px solid var(--green);
    transition: 0.3s width;
  }

  &:focus {
    outline: none;
    &::after {
      width: 100%;
    }
  }

  ${utilities.media.small`
      font-size: 0.92rem;

      &::after {
        width: 0%;
      }
    `}
`;

const MenuListItemHeader = styled.h4`
  padding-bottom: 0.25rem;
  display: flex;
  padding-top: 4px;
  padding-bottom: 0.9rem;
  justify-content: space-between;
  position: relative;
`;

const MenuPrice = styled.div`
  --width: 38px;
  user-select: none;
  pointer-events: none;
  background-color: var(--light-green);
  padding: 3px;
  top: -7px;
  position: absolute;
  width: var(--width);
  height: var(--width);
  text-align: center;
  right: 4px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: var(--width);
    width: var(--width);
    background-color: var(--light-green);
  }

  &:before {
    transform: rotate(30deg);
  }

  &:after {
    transform: rotate(60deg);
  }

  span {
    font-weight: normal;
    font-size: 80%;
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(12deg);
    z-index: 2;
  }
`;

const CategoryTitle = styled.h3`
  font-family: 'cookieregular';
  color: var(--torch-red);
  text-align: center;
  font-size: 2.7rem;

  ${utilities.media.medium`
    font-size: 3.1rem;
  `}
`;

const CategoryDescription = styled.p`
  font-size: 15px;
  margin-bottom: 1.35rem;
  ${utilities.media.medium`
    padding: 0 .5em;
  `}
`;

function Menu() {
  const Image = props => <img alt="" {...props} />;
  return (
    <>
      <MenuList>
        {data.map((section, index) => (
          <MenuListItemOuter key={index}>
            <CategoryTitle>{section.category}</CategoryTitle>
            <CategoryDescription>{section.description}</CategoryDescription>
            <ul>
              {section.items.map((items, itemsIndex) => (
                <MenuListItemInner key={itemsIndex}>
                  <MenuListItemWrapperLink
                    tabIndex="0"
                    to={`/menu/${items.componentName}`}
                  />
                  <MenuListItemHeader>
                    <MenuListItemHeaderLink
                      className="menuListItemHeaderLink"
                      to={`/menu/${items.componentName}`}
                    >
                      {items.name}
                    </MenuListItemHeaderLink>
                    <MenuPrice>
                      <span>{items.price}</span>
                    </MenuPrice>
                  </MenuListItemHeader>
                  <p>
                    {items.imgName && (
                      <Image width="32" height="32" src={items.imgName} />
                    )}
                    {items.description}
                  </p>
                </MenuListItemInner>
              ))}
            </ul>
          </MenuListItemOuter>
        ))}
      </MenuList>
    </>
  );
}

export default Menu;
