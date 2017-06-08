import login from 'layout/login';
import View404 from 'layout/404';
import base from 'layout/base';
import urlParse from 'utils/urlParse';
import Session from 'model/session';


const tearDownView = () => {
	while(document.body.firstChild) {
		document.body.removeChild(document.body.firstChild);
	}
}


const picsRouteObject = (pathArray) => {
	var picsObject = {};
	picsObject.pics = true;
	if(pathArray[1]) {
		if(pathArray[1] == "albums") {
			picsObject.albums = true;
			if(pathArray[2]) {
				picsObject.albumid = pathArray[2];
			}
		} else {
			picsObject.picid = pathArray[1];
		}
	}
	return picsObject;
}

const songsRouteObject = (pathArray) => {
	var songsObject = {};
	songsObject.songs = true;
	return songsObject;
}

// clean this fucker up ASAP, this is ridiculous
const pathObject = (path) => {
	var pathArray = path.split("/").filter((val) => {
		return val != "";
	});

	if(pathArray.length == 0) {
		return {};
	} 
	var pathParams = {};
	if(pathArray[0] == "login") {
		pathParams.login = true;
	} else {
		if(pathArray[0] == "pics") {
			pathParams = picsRouteObject(pathArray);
		} else if(pathArray[0] == "songs") {
			pathParams = songsRouteObject(pathArray);
		}
	}
	return pathParams;
}

const routeRegex = (url) => {
	const routes = [
		'\^$', 
		'\^/login$', // only unprotected view
		'\^/pics$',
		'\^/songs$',
		'\^/pics/albums$',
		'\^/pics/([1-9])([0-9]+)?$',
		'\^/songs/([1-9])([0-9]+)?$',
		'\^/pics/albums/([1-9])([0-9]+)?$',
	]
	let match = false;
	for (var key in routes) {
	    if(url.match(routes[key])) {
	    	match = true;
	    	break;
	    }
	}
	var pathParams = pathObject(url);
	console.log(pathParams);
	if(!match) {
		View404.render();
	} else {
		Session.validate()
		.then(() => {
			if(pathParams.login) {
				console.log("here");
				history.replaceState(null, null, "/");
			}
			base.render(pathParams);
		})
		.catch(() => {
			if(!pathParams.login) {
				history.replaceState(null, null, "/login");
			}
			document.body.className = "";
			login.render();
		});
	}
}

var router = {
	route: (url, load) => {
		url = urlParse.removeTrailingBackslash(url);
		if(load) {
			document.addEventListener('DOMContentLoaded', () => {
				routeRegex(url);
			});
		} else {
			routeRegex(url);
		}
	},
}

export default router;
