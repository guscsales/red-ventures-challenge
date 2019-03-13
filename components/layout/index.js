import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import Header from '../header';

const Layout = ({ children }) => (
	<>
		<Header />
		<main>{children}</main>
	</>
);

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;
