var urlParse = {
	removeTrailingBackslash(url) {
		if(url.endsWith("/")) {
			url = url.substring(0, url.length - 1);
		}
		return url;
	}
}

export default urlParse;
