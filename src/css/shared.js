import styled from 'styled-components';
import utilities from '../utilities';

const shared = {
  reasonList: () => styled.ol`
    list-style-type: none;
    counter-reset: li-counter;
    padding: 0;
    margin: 0 auto;
    width: calc(100% - 1em);

    ${utilities.media.small`
      width: calc(100% - 3em);
    `}

    ${utilities.media.medium`
      max-width: 60vw;
    `}
  `,

  reasonListItem: () => styled.li`
    @keyframes twistIt {
      to {
        transform: rotate(-20deg);
      }
    }

    position: relative;
    margin-bottom: 2.2em;
    padding: 1.5em;
    background-color: #eaeaea;
    box-shadow: 0 10px 12px -11px rgba(0, 0, 0, 0.4);

    &:before {
      position: absolute;
      top: -0.3em;
      left: -0.5em;
      width: 1.45em;
      height: 1.3em;
      font-size: 1.35em;
      line-height: 1.2;
      font-weight: bold;
      text-align: center;
      color: #464646;
      background-color: #d0d0d0;
      z-index: 99;
      overflow: hidden;
      content: counter(li-counter);
      counter-increment: li-counter;
      animation: 0.5s twistIt forwards 0.75s;
    }
  `,

  stepButton: () => styled.button`
    overflow: hidden;
    padding: 12px;
    cursor: pointer;
    user-select: none;
    transition: all 150ms linear;
    text-align: center;
    white-space: nowrap;
    text-transform: capitalize;
    border: 0 none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.3;
    appearance: none;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 5px 10px var(--smoke);
    margin: 10px auto;
    color: #fff;
    background-color: var(--torch-red);

    &:hover {
      transition: all 150ms linear;
      opacity: 0.85;
    }

    &:active {
      transition: all 150ms linear;
      opacity: 0.75;
    }

    &:focus {
      outline: 1px dotted #959595;
      outline-offset: -4px;
    }
  `,

  section: () => styled.section`
    padding: 1em;
  `,
  sectionTitle: () => styled.h2`
    margin-bottom: 1rem;
  `,
};

export default shared;
