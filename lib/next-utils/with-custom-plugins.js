'use strict';

module.exports = (nextConf = {}) =>
	Object.assign({}, nextConf, {
		webpack(config, options) {
			if (Array.isArray(nextConf.customPlugins)) {
				config.plugins.push(...nextConf.customPlugins);
			}

			if (typeof nextConf.webpack === 'function') {
				return nextConf.webpack(config, options);
			}

			return config;
		}
	});
