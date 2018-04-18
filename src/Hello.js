import React from 'react';
import PropTypes from 'prop-types';

const Hello = props => (
    <p>Hello {props.name}</p>
);

export default Hello;

Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: 'Unknown',
};
