var homeView = {
	renderHomeView: function() {
		this.drawView();
		this.setupEventListeners();
		homeController.setupListeners();
	},
	drawView: function() {

	},
	setupEventListeners: function() {
		document.getElementById("home-bars").addEventListener("click", this.handleBarsClick); 
	},
	handleBarsClick: function(e) {
		// fire off a clickHomeBars event, to be caught and handled by the controller.
		var clickBars = new CustomEvent("clickBars", {
			detail: e 
		});
		document.body.dispatchEvent(clickBars);
	}
}

export default homeView;
