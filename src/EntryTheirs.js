import React from 'react';
import PropTypes from 'prop-types';

function EntryTheirs(props) {
  const { children, avatar } = props;
  return (
    <li className="entry theirs">
      <img src={avatar} alt="" className="avatar" />
      <p className="message">{children}</p>
    </li>
  );
}

EntryTheirs.propTypes = {
  children: PropTypes.any,
  avatar: PropTypes.string,
};

EntryTheirs.defaultProps = {
  children: [],
  avatar: '/snob.jpg',
};

export default EntryTheirs;
