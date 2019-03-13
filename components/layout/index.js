import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Layout = ({ children }) => (
	<div className={style.containerProvisional}>
		<main>{children}</main>
	</div>
);

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;
