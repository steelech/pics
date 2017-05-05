var homeView = {
	renderHomeView: function() {
		var bars = document.createElement("i");
		bars.className += " fa fa-bars home-bars";
		document.getElementsByTagName('body')[0].appendChild(bars);
	}
}

export default homeView;
