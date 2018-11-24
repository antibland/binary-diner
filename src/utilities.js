import { css } from 'styled-components';

const sizes = {
  large: 1000,
  medium: 800,
  small: 600,
};

const utilities = {
  media: Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;

    return acc;
  }, {}),
};

export default utilities;
