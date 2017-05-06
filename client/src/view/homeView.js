var homeView = {
	renderHomeView: function() {
		this.drawView();
		this.setupEventListeners();
	},
	drawView: function() {
		var bars = document.createElement("i");
		bars.className += " fa fa-bars home-bars";
		bars.id = "home-bars"
		document.getElementsByTagName('body')[0].appendChild(bars);
	},
	setupEventListeners: function() {
		document.getElementById("home-bars").addEventListener("click", this.handleBarsClick); 
	},
	handleBarsClick: function(e) {
		console.log(e);
	}
}

export default homeView;
