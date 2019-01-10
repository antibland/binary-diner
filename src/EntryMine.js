import React from 'react';
import PropTypes from 'prop-types';

function EntryMine(props) {
  const { children, avatar } = props;
  return (
    <li className="entry mine">
      <img src={avatar} alt="" className="avatar" />
      <p className="message">{children}</p>
    </li>
  );
}

EntryMine.propTypes = {
  children: PropTypes.string,
  avatar: PropTypes.string,
};

EntryMine.defaultProps = {
  avatar: '/me.jpg',
};

export default EntryMine;
