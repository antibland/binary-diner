import React from 'react';
import PropTypes from 'prop-types';

function EntryMine(props) {
  const { children } = props;
  return (
    <li className="entry mine">
      <img src="/me.jpg" alt="" className="avatar" />
      <p className="message">{children}</p>
    </li>
  );
}

EntryMine.propTypes = {
  children: PropTypes.string,
};

export default EntryMine;
