import React from 'react';
import propTypes from 'prop-types';
import style from './style.scss';
import classnames from 'classnames';

const Container = ({ children, withGrid, ...props }) => (
	<div
		className={classnames(style.container, { [style.withGrid]: withGrid })}
		{...props}
	>
		{children}
	</div>
);

Container.propTypes = {
	children: propTypes.node,
	withGrid: propTypes.bool
};

Container.defaultProps = {
	withGrid: true
};

export default Container;
