import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.scss';

const Title = ({ children, center }) => (
	<h1 className={classnames(style.h1, { [style.center]: center })}>
		{children}
	</h1>
);

Title.propTypes = {
	children: propTypes.node,
	center: propTypes.bool
};

export default Title;
