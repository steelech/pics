import loginView from 'layout/login';
import View404 from 'layout/404';
import homeView from 'components/homeView';
import picsView from 'components/picsView';
import urlParse from 'utils/urlParse';

const tearDownView = () => {
	while(document.body.firstChild) {
		document.body.removeChild(document.body.firstChild);
	}

}
const render = (url) => {
	if(url["first"] == "login") {
		if(url["rest"] != "") {
			View404.render404View();
		} else {
			console.log("hello, world");
			homeView.renderHomeView();
			loginView.renderLoginView();
		}
	} else if(url["first"] == "pics") {
		picsView.renderPicsView();
	} else if(!url["first"]) {
		homeView.renderHomeView();
	
	} else {
		View404.render404View();
	}
}

var router = {
	// need to fix this, pull out the first part of the path and pass the rest on to the view
	// we can do some kind of nested routing
	// also, check if the user is logged in before routing them
	route: (url, load) => {
		url = urlParse.removeTrailingBackslash(url);
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