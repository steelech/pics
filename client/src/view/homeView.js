var homeView = {
	renderHomeView: function() {
		var header = document.createElement("h1");
		var headerText = document.createTextNode("Home");
		header.appendChild(headerText);

		document.getElementsByTagName('body')[0].appendChild(header);
	}
}

export default homeView;
