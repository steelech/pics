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

const routeRegex = (url) => {
	const routes = {
		'\^$': base, 
		'\^/login$': loginRoute, // only unprotected view
		'\^/pics$': picsIndex,
		'\^/songs$': songsIndex,
		'\^/pics/albums$': albumsIndex,
		'\^/pics/([1-9])([0-9]+)?$': picDetails,
		'\^/songs/([1-9])([0-9]+)?$': songDetails,
		'\^/pics/albums/([1-9])([0-9]+)?$': albumDetails,
	}
	let match = false;
	for (var key in routes) {
	  if (routes.hasOwnProperty(key)) {
	    if(url.match(key)) {
	    	console.log("match!");
	    	match = true;
	    	routes[key].call();
	    	break;
	    }
	  }
	}
	if(!match) {
		View404.render();
	}
}

var base = () => {
	console.log("routing to base");
	Session.validate()
	.then(() => {
		home.render();
	})
	.catch(() => {
		login.render();
	});
}

var loginRoute = () => {
	login.render();
}

var picsIndex = () => {
	Session.validate()
	.then(() => {
		pics.render();
	})
	.catch(() => {
		login.render();
	});
}

var songsIndex = () => {
	Session.validate()
	.then(() => {
		pics.render();
	})
	.catch(() => {
		login.render();
	});
}

var albumsIndex = () => {
	Session.validate()
	.then(() => {
		pics.render();
	})
	.catch(() => {
		login.render();
	});
}

var picDetails = () => {
	Session.validate()
	.then(() => {
		pics.render();
	})
	.catch(() => {
		login.render();
	});
}

var songDetails = () => {
	Session.validate()
	.then(() => {
		pics.render();
	})
	.catch(() => {
		login.render();
	});
}

var albumDetails = () => {
	Session.validate()
	.then(() => {
		pics.render();
	})
	.catch(() => {
		login.render();
	});
}

var renderProtectedView = (view) => {
	Session.validate()
	.then(() => {
		view();
	})
	.catch(() => {
		login.render();
	});
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
