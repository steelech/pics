var picsView = {
	renderPicsView() {
		console.log("pics view");
		var header = document.createElement("h1");
	       	var headerText = document.createTextNode("Pics");
		header.appendChild(headerText);
		document.body.appendChild(header);	
	}
}

export default picsView;
