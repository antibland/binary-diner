import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import utilities from './utilities';

const MenuList = styled.ul`
  flex-grow: 1;
  ${utilities.media.small`
    column-count: 2;
  `}
`;

const MenuListItemOuter = styled.li`
  margin-bottom: 1.5rem;
  display: inline-block;

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
  ${utilities.media.medium`
    padding: 0 .5em;
  `}
`;

const MenuListItemHeader = styled.h4`
  padding-bottom: 0.25rem;
  display: flex;
  padding-top: 4px;
  padding-bottom: 0.9rem;
  justify-content: space-between;
  position: relative;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    text-shadow: 0 1px 1px var(--green);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0%;
      border-bottom: 2px solid var(--green);
      transition: 0.3s width;
    }

    &:hover::after,
    &:focus::after {
      width: 100%;
    }
  }
`;

const MenuPrice = styled.div`
  --width: 38px;
  background-color: var(--light-green);
  padding: 3px;
  top: -7px;
  position: absolute;
  width: var(--width);
  height: var(--width);
  text-align: center;
  transform: rotate(12deg);
  right: 0;

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
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;

const CategoryTitle = styled.h3`
  font-family: 'Galada';
  color: var(--red);
  text-align: center;
  font-size: 26px;
  margin-bottom: -6px;
`;

const CategoryDescription = styled.p`
  font-size: 15px;
  margin-bottom: 1.35rem;
  ${utilities.media.medium`
    padding: 0 .5em;
  `}
`;

const data = [
  {
    category: 'Breakfast',
    description:
      'A greasy but tasty array of items. Please tip your waiter or waitress.',
    items: [
      {
        name: 'Button',
        componentName: 'Button',
        description:
          'When done properly, a sumptuous union of form and function. When done poorly, a disappointing mess.',
        price: '$4.50',
      },
    ],
  },
  {
    category: 'Lunch',
    description:
      'What can we say? Lunch is a critical activity in any workplace. Don`t miss it',
    items: [
      {
        name: 'Animated Accordion',
        componentName: 'Accordion',
        imgName: '/accordion.png',
        description:
          'No musical instruments here—it’s not that kind of accordion. Think FAQ items and panels of data that expand and contract when clicked. A staple of any well-rounded, e-commerce diet.',
        price: '$6.99',
      },
      {
        name: 'Mel‘s Burger Menu',
        componentName: 'Burger',
        imgName: '/burger.png',
        description:
          'Somehow, hamburger menus are on every menu. And they‘ve been around since the early 80‘s.',
        price: '$9.50',
      },
    ],
  },
];

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
                  <MenuListItemHeader>
                    <NavLink to={`/menu/${items.componentName}`}>
                      {items.name}
                    </NavLink>
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
