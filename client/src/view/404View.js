var View404 = {
	render404View() {
		var header = document.createElement("h1");
		var headerText = document.createTextNode("404: Not Found")
		header.appendChild(headerText);

		document.getElementsByTagName('body')[0].appendChild(header);
	}
}

export default View404;
