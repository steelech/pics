var homeController = {
	setupListeners: function() {
		document.body.addEventListener('clickHomeBars', this.handleClick);
	},
	handleClick: function(e) {
		// need to handle 3 scenarios:
		// 1) user isn't logged in and they're not on the login screen
		// 2) user isn't logged in and they are on the login screen
		// 3) user is logged in
		console.log("raw event: ", e);
		// need to check url to figure out where user is in the app
		// if they are on the login page and we get a click event, we need to tell the login page to gtfo
		// if they aren't on the login page and we get a click event, we need to render the login page
		console.log("path: ", window.location.pathname);
	}
}

export default homeController;
