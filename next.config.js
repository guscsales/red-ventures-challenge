const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withCustomLoaders = require('./lib/next-utils/with-custom-loaders');
const withCustomPlugins = require('./lib/next-utils/with-custom-plugins');
const { NODE_ENV } = process.env;

const sequence = (...fns) => data =>
	fns.reduce((result, fn) => fn(result), data);

const nextConfig = {
	distDir: 'build',
	assetPrefix: '',
	poweredByHeader: false,
	exportPathMap: () => ({})
};

const IS_PROD = NODE_ENV == 'production';

const customLoaders = [
	{
		test: /\.(eot|woff2?|ttf|svg|jpe?g|png|svg|gif|ico)$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: IS_PROD ? '' : '[path][name].[ext]',
					publicPath: `${nextConfig.assetPrefix}/_next/static/`,
					outputPath: './static'
				}
			}
		]
	}
];

const cssConfig = {
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: IS_PROD ? '[hash:base64:5]' : '[path][name]__[local]'
	}
};

module.exports = sequence(
	withCustomPlugins,
	withCustomLoaders,
	withSass,
	withCss
)({
	customLoaders,
	...cssConfig,
	...nextConfig
});
