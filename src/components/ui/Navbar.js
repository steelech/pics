var Navbar = {
	render: function(params) {
		console.log("rendering navbar");
		var navbarContainer = document.createElement("div");
		navbarContainer.className += "navbar-container ";
		navbarContainer.id += "navbar-container";
		var navbarText = document.createTextNode("navbar");
		navbarContainer.appendChild(navbarText);

		document.getElementById("base-container").appendChild(navbarContainer);
		
	}
}

export default Navbar;