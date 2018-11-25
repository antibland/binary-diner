import styled from 'styled-components';

const shared = {
  reasonList: () => styled.ol`
    list-style-type: none;
    margin-left: 1em;
    counter-reset: li-counter;
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

    &:before {
      position: absolute;
      top: -0.3em;
      left: -0.5em;
      width: 1.8em;
      height: 1.2em;
      font-size: 1.5em;
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

    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      bottom: -3px;
      width: 94%;
      left: 50%;
      margin-left: -47%;
      height: 30px;
      box-shadow: 0 16px 30px -5px rgba(0, 0, 0, 0.4);
      transform: perspective(800px) rotateY(0deg) rotateX(45deg);
    }
  `,
};

export default shared;
