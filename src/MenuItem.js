import React, { Suspense } from 'react';
import { PropTypes } from 'prop-types';
import shortid from 'shortid';
import * as Views from './views';
import './css/Chat.css';

const MenuItem = props => {
  const {
    match: {
      params: { componentName },
    },
  } = props;

  const Empty = () => <div>This is not on the menu.</div>;
  const dynamicComponent = (() => {
    const MyComponent = Views[`${componentName}View`]
      ? Views[`${componentName}View`]
      : Empty;
    return <MyComponent key={shortid.generate()} />;
  })();

  return (
    <>
      <Suspense fallback={<div>Loading…</div>}>{dynamicComponent}</Suspense>
    </>
  );
};
MenuItem.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      componentName: PropTypes.string.isRequired,
    }),
  }),
};

export default MenuItem;
