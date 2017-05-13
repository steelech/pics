var picsView = {
	renderPicsView() {
		var header = document.createElement("h1");
	       	var headerText = document.createTextNode("Pics");
		header.appendChild(headerText);
		document.body.appendChild(header);	
		document.body.className = "pics-background";
	}
}

export default picsView;
