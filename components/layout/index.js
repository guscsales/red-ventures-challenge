import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';

import { wrapper } from './style.scss';

const Layout = ({ children }) => (
	<div className={wrapper}>
		<Header />
		<main>{children}</main>
	</div>
);

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;
