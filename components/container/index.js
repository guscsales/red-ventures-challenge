import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Container = ({ children }) => (
	<div className={style.container}>{children}</div>
);

Container.propTypes = {
	children: PropTypes.node
};

export default Container;
