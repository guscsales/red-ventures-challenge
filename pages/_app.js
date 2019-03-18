import React from 'react';
import App from 'next/app';
import Error from 'next/error';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import axios from 'axios';
import Router from 'next/router';
import NProgress from 'nprogress';

import { initializeStore } from '../store';
import { setFullData } from '../actions/data';
import { setCurrentPrice, setAccumulatorPrice } from '../actions/result';

import '../lib/scss/main.scss';

Router.events.on('routeChangeStart', url => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class PaymentCollector extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		const { req } = ctx;

		if (req) {
			try {
				const {
					store: { dispatch }
				} = ctx;
				const {
					data: {
						data,
						data: { price }
					}
				} = await axios(
					'https://next.json-generator.com/api/json/get/41ORKNZDU'
				);

				dispatch([
					setFullData(data),
					setAccumulatorPrice({
						currentPrice: price,
						accumulatorPrice: 0
					}),
					setCurrentPrice(price)
				]);
			} catch (e) {
				console.error(e);

				pageProps.error = true;
			}
		}

		return { pageProps };
	}

	componentDidMount() {
		const { store } = this.props;
		const {
			step: { startSteps }
		} = store.getState();

		if (Router.pathname !== '/' && !startSteps) {
			Router.replace('/');
		}
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
