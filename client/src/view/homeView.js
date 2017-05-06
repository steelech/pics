import homeController from '../../src/controller/homeController';
var homeView = {
	renderHomeView: function() {
		this.drawView();
		this.setupEventListeners();
		homeController.setupListeners();
	},
	drawView: function() {
		var bars = document.createElement("i");
		bars.className += " fa fa-bars home-bars";
		bars.id = "home-bars"
		document.getElementsByTagName('body')[0].appendChild(bars);
		document.body.className = "home-login-background";
	},
	setupEventListeners: function() {
		document.getElementById("home-bars").addEventListener("click", this.handleBarsClick); 
	},
	handleBarsClick: function(e) {
		// fire off a clickHomeBars event, to be caught and handled by the controller.
		var clickBars = new CustomEvent("clickHomeBars", {
			detail: e 
		});
		document.body.dispatchEvent(clickBars);
	}
}

export default homeView;
