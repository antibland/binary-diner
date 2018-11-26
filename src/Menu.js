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
`;

const MenuListItemInner = styled.li`
  margin-bottom: 1.5rem;
  ${utilities.media.medium`
    padding: 0 .5em;
  `}
`;

const MenuListItemHeader = styled.h4`
  padding-bottom: 0.25rem;
  text-align: center;
`;

const MenuPrice = styled.span`
  font-weight: normal;
  font-size: 90%;
  background-color: var(--light-green);
  border: 1px solid var(--green);
  padding: 3px;
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
        description:
          'No musical instruments here—it’s not that kind of accordion. Think FAQ items and panels of data that expand and contract when clicked. A staple of any well-rounded, e-commerce diet.',
        price: '$6.99',
      },
    ],
  },
];

function Menu() {
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
                  </MenuListItemHeader>
                  <p>{items.description}</p>
                  <p style={{ textAlign: 'center', padding: '10px 0 0' }}>
                    <MenuPrice>{items.price}</MenuPrice>
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
