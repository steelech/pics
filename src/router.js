import login from 'layout/login';
import View404 from 'layout/404';
import home from 'components/home';
import pics from 'components/pics';
import urlParse from 'utils/urlParse';
import Session from 'model/session';


const tearDownView = () => {
	while(document.body.firstChild) {
		document.body.removeChild(document.body.firstChild);
	}
}

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
			pathParams.pics = true;
			if(pathArray[1]) {
				if(pathArray[1] == "albums") {
					pathParams.albums = true;
					if(pathArray[2]) {
						pathParams.albumid = pathArray[2];
					}
				} else {
					pathParams.picid = pathArray[1];
				}
			}
		} else if(pathArray[0] == "songs") {
			pathParams.songs = true;
		}
	}
	return pathParams;
}

const routeRegex = (url) => {
	var pathParams = pathObject(url);
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
	if(!match) {
		View404.render();
	} else {
		if(pathParams.login) {
			// login view
			login.render();
		} else {
			// base view
			Session.validate()
			.then(() => {
				home.render(pathParams);
			})
			.catch(() => {
				login.render();
			});
		}
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
