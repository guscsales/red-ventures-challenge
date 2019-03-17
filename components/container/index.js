import React from 'react';
import propTypes from 'prop-types';
import style from './style.scss';
import classnames from 'classnames';

const Container = ({
	children,
	withGrid,
	withBottomSpace,
	className,
	...props
}) => {
	return (
		<div
			className={classnames(
				style.container,
				{
					[style.withGrid]: withGrid,
					[style.bottomSpace]: withBottomSpace
				},
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

Container.propTypes = {
	children: propTypes.node,
	withGrid: propTypes.bool,
	withBottomSpace: propTypes.bool,
	className: propTypes.string
};

Container.defaultProps = {
	withGrid: true,
	withBottomSpace: false,
	className: ''
};

export default Container;
