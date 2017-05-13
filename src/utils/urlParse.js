var urlParse = {
	removeTrailingBackslash(url) {
		if(url.endsWith("/")) {
			url = url.substring(0, url.length - 1);
		}
		return url;
	},
	breakUpPath(url) {
		// get the first part of the path, return an object
		// w/ the first part and then the second part as separate 
		// strings
		var pathArray = url.split("/");
		pathArray.splice(0, 1);
		var obj =  {
			"first": pathArray.splice(0, 1)[0],
			"rest": pathArray.join("/")
		}
		return obj;
	}
}


export default urlParse;
