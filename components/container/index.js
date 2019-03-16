import React from 'react';
import propTypes from 'prop-types';
import style from './style.scss';
import classnames from 'classnames';

const Container = ({ children, withGrid, withBottomSpace, ...props }) => (
	<div
		className={classnames(style.container, {
			[style.withGrid]: withGrid,
			[style.bottomSpace]: withBottomSpace
		})}
		{...props}
	>
		{children}
	</div>
);

Container.propTypes = {
	children: propTypes.node,
	withGrid: propTypes.bool,
	withBottomSpace: propTypes.bool
};

Container.defaultProps = {
	withGrid: true,
	withBottomSpace: false
};

export default Container;
