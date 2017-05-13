import loginView from 'components/loginView';
import homeView from 'components/homeView';
import View404 from 'components/404View';
import picsView from 'components/picsView';
import urlParse from 'utils/urlParse';

var router = {
	// need to fix this, pull out the first part of the path and pass the rest on to the view
	// we can do some kind of nested routing
	// also, check if the user is logged in before routing them
	route: function(url) {
		url = urlParse.removeTrailingBackslash(url);
		url = urlParse.breakUpPath(url);
		if(url["first"] == "login") {
			if(url["rest"] != "") {
				View404.render404View();
			} else {
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
}

export default router;
