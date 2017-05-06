var homeController = {
	setupListeners: function() {
		document.body.addEventListener('clickBars', this.handleClick);
	},
	handleClick: function(e) {
		if(window.location.pathname.includes("login")) {
			// tear down login form
			var clickHome = new CustomEvent("clickHomeBars");
			document.dispatchEvent(clickHome);
			
		} else {
			// render login form
			var clickLogin = new CustomEvent("clickLoginBars");
			document.dispatchEvent(clickLogin);
		}
	}
}

export default homeController;
