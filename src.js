const escape = require('lodash.escape');

module.exports = function eskape(strs, ...vals) {
	var out = strs[0];

	for (let i = 0; i < vals.length; i++) {
		out = out + escape(vals[i]) + strs[i + 1];
	}

	return out;
}
