import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuList = styled.ul`
  flex-grow: 1;
  column-count: 2;
`;

const MenuListItemOuter = styled.li`
  margin-bottom: 1.5rem;
`;

const MenuListItemInner = styled.li`
  margin-bottom: 1.5rem;
`;

const Warning = styled.p`
  font-size: 0.9rem;
  text-align: center;
  padding-bottom: 1rem;
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
        description: 'A sumptuous combination of form and function',
        price: '$4.50',
      },
      {
        name: 'Button',
        componentName: 'Button',
        description: 'A sumptuous combination of form and function',
        price: '$4.50',
      },
      {
        name: 'Button',
        componentName: 'Button',
        description: 'A sumptuous combination of form and function',
        price: '$4.50',
      },
      {
        name: 'Button',
        componentName: 'Button',
        description: 'A sumptuous combination of form and function',
        price: '$4.50',
      },
      {
        name: 'Button',
        componentName: 'Button',
        description: 'A sumptuous combination of form and function',
        price: '$4.50',
      },
      {
        name: 'Button',
        componentName: 'Button',
        description: 'A sumptuous combination of form and function',
        price: '$4.50',
      },
      {
        name: 'Button',
        componentName: 'Button',
        description: 'A sumptuous combination of form and function',
        price: '$4.50',
      },
      {
        name: 'Button',
        componentName: 'Button',
        description: 'A sumptuous combination of form and function',
        price: '$4.50',
      },
      {
        name: 'Button',
        componentName: 'Button',
        description: 'A sumptuous combination of form and function',
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
        name: 'Basic Accordion',
        componentName: 'Accordion',
        description: 'A delicious, pure CSS dish. Hold the JavaScript.',
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
                  <h4>
                    <NavLink to={`/menu/${items.componentName}`}>
                      {items.name}
                    </NavLink>
                  </h4>
                  <p>{items.description}</p>
                </MenuListItemInner>
              ))}
            </ul>
          </MenuListItemOuter>
        ))}
      </MenuList>
      <Warning>
        Consuming raw or undercooked <code>JavaScript</code>, <code>CSS</code>{' '}
        or <code>HTML</code> may increase your risk of codeborne illness.
      </Warning>
    </>
  );
}

export default Menu;
