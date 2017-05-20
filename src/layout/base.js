import Navbar from "components/ui/Navbar";

var baseView = {
	render: function(params) {
		// the params are used to tell us which components to render, as well
		// as what we should pass to those components
		console.log("path params: ", params);
		document.body.style = "margin: 0";
		var baseContainer = document.createElement("div");
		baseContainer.className += "base-container";
		baseContainer.id = "base-container";
		document.body.appendChild(baseContainer);
		Navbar.render();
		var contentContainer = document.createElement("div");
		contentContainer.className = "content-container";
		contentContainer.id = "content-container";
		contentContainer.appendChild(document.createTextNode("main content"));
		baseContainer.appendChild(contentContainer)


		// document.body.style="background: #3F51B5";	
	}
}

export default baseView;
