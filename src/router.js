import loginView from 'layout/login';
import View404 from 'layout/404';
import homeView from 'components/homeView';
import picsView from 'components/picsView';
import urlParse from 'utils/urlParse';
import Session from 'model/session';


const tearDownView = () => {
	while(document.body.firstChild) {
		document.body.removeChild(document.body.firstChild);
	}
}

const routeRegex = (url) => {
	const routes = {
		'\^$': base,
		'\^/login$': login,
		'\^/pics$': picsIndex,
		'\^/songs$': songsIndex,
		'\^/pics/albums$': albumsIndex,
		'\^/pics/([1-9])([0-9]+)?$': picDetails,
		'\^/songs/([1-9])([0-9]+)?$': songDetails,
		'\^/pics/albums/([1-9])([0-9]+)?$': albumDetails,
	}
	for (var key in routes) {
	  if (routes.hasOwnProperty(key)) {
	    if(url.match(key)) {
	    	console.log("match!");
	    	routes[key].call();
	    }
	  }
	}
}

var base = () => {
	console.log("routing to base");

}

var login = () => {
	console.log("routing to login");

}

var picsIndex = () => {
	console.log("routing to picsIndex");

}

var songsIndex = () => {
	console.log("routing to songsIndex");

}

var albumsIndex = () => {
	console.log("routing to albumsIndex");

}

var picDetails = () => {
	console.log("routing to picDetails");

}

var songDetails = () => {
	console.log("routing to songDetails");

}

var albumDetails = () => {
	console.log("routing to albumDetails");

}

const render = (url) => {
	switch (url["first"]) {
		case "login":
			if(url["rest"] != "") {
				View404.render404View();
			} else {
				homeView.renderHomeView();
				loginView.renderLoginView();
			}
			break;

		case "pics":
			Session.validate()
			.then(() => {
				picsView.renderPicsView();
			})
			.catch(() => {
				homeView.renderHomeView();
				loginView.renderLoginView();
			});
			break;

		case undefined:
			homeView.renderHomeView();
			break;

		default: 
			View404.render404View();
			break;
	}
}

var router = {
	route: (url, load) => {
		url = urlParse.removeTrailingBackslash(url);
		routeRegex(url);
		url = urlParse.breakUpPath(url);
		if(load) {
			document.addEventListener('DOMContentLoaded', () => {
				render(url);
			});
		} else {
			tearDownView();
			render(url);
		}
	},
}

export default router;
