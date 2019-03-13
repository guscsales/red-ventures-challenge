import React from 'react';
import propTypes from 'prop-types';
import style from './style.scss';

const Title = ({ children }) => <h1 className={style.h1}>{children}</h1>;

Title.propTypes = {
	children: propTypes.node
};

export default Title;
