import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Container = ({ children, ...props }) => (
	<div className={style.container} {...props}>
		{children}
	</div>
);

Container.propTypes = {
	children: PropTypes.node
};

export default Container;
