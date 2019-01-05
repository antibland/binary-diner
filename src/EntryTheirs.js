import React from 'react';
import PropTypes from 'prop-types';

function EntryTheirs(props) {
  const { children } = props;
  return (
    <li className="entry theirs">
      <img src="/snob.jpg" alt="" className="avatar" />
      <p className="message">{children}</p>
    </li>
  );
}

EntryTheirs.propTypes = {
  children: PropTypes.string,
};

export default EntryTheirs;
