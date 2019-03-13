import React from 'react';
import App from 'next/app';
import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { initializeStore } from '../store';

class PaymentCollector extends App {
	getError() {
		const { status } = this.props.store.getState();

		return status.error ? (
			<Error statusCode={status.error.statusCode} />
		) : (
			<div />
		);
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
