import Navbar from "components/ui/Navbar";

var baseView = {
	render: function(params) {
		// the params are used to tell us which components to render, as well
		// as what we should pass to those components
		console.log("path params: ", params);
		document.body.style = "background: white";
		var baseContainer = document.createElement("div");
		baseContainer.className += "base-container";
		baseContainer.id = "base-container";
		document.body.appendChild(baseContainer);
		Navbar.render();


		// document.body.style="background: #3F51B5";	
	}
}

export default baseView;
