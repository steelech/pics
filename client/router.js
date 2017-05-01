import loginView from './src/view/loginView';
import homeView from './src/view/homeView';
import View404 from './src/view/404View';
import urlParse from './src/utils/urlParse';

var router = {
	route: function(url) {
		url = urlParse.removeTrailingBackslash(url);
		if(url == "/login") {
			loginView.renderLoginView(); 
		} else if(url == "") {
			homeView.renderHomeView();

		} else {
			View404.render404View();
		}
	}
}

export default router;
