var loginView = {
	renderLoginView: function() {
		var header = document.createElement("h1");
		var headerText = document.createTextNode("Login");
		header.appendChild(headerText);

		document.getElementsByTagName('body')[0].appendChild(header);
	}
}

export default loginView;
