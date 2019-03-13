import React, { PureComponent } from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';

import style from './style.scss';

class Index extends PureComponent {
	render() {
		return (
			<>
				<Head title="Build your MODEL R" />
				<Layout>Layout content</Layout>
			</>
		);
	}
}

export default Index;
