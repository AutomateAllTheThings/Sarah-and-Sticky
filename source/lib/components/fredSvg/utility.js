import _ from "underscore";

export default class Utility {
	static defaults(options, defaultOptions) {
		return _.defaults(options, defaultOptions);
	}
}
