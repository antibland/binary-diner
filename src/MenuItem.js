import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = { item: null };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { match } = this.props;
    this.setState({ item: match.params.item });
  }

  render() {
    const { item } = this.state;
    return (
      <>
        <p>Your order: {item}</p>
      </>
    );
  }
}
MenuItem.propTypes = {
  params: PropTypes.shape({
    item: PropTypes.string,
  }),
};

export default MenuItem;
