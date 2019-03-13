import React from 'react';
import App from 'next/app';
import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import axios from 'axios';

import { initializeStore } from '../store';
import { setFullData } from '../actions/data';

import '../lib/scss/main.scss';

class PaymentCollector extends App {
	static async getInitialProps({ ctx }) {
		let pageProps = {
			error: false
		};

		try {
			const {
				store: { dispatch }
			} = ctx;

			const res = await axios(
				'https://next.json-generator.com/api/json/get/41ORKNZDU'
			);

			dispatch(setFullData(res.data.data));
		} catch (e) {
			console.error(e);

			pageProps.error = true;
		}

		return { pageProps };
	}

	getError() {
		return <Error statusCode="500" />;
	}

	render() {
		const { Component, store, pageProps } = this.props;

		return (
			<Provider store={store}>
				{pageProps.error ? (
					this.getError()
				) : (
					<Component {...pageProps} />
				)}
			</Provider>
		);
	}
}

export default withRedux(initializeStore)(PaymentCollector);
