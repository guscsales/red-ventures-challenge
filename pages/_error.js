import React from 'react';
import propTypes from 'prop-types';

class ErrorPage extends React.Component {
	static getInitialProps({ res, err }) {
		const origin = res ? res : err;
		const statusCode = origin ? origin.statusCode : null;
		return { statusCode };
	}

	render() {
		switch (this.props.statusCode) {
			case 404:
				return 'Not found';
			default:
				return 'Error';
		}
	}
}

ErrorPage.propTypes = {
	statusCode: propTypes.number.isRequired
};

export default ErrorPage;
