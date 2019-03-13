import React from 'react';
import Document, { Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<html>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default MyDocument;
