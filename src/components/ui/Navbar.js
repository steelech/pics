


var Navbar = {
	_handleMusicClick: function() {
		console.log('opening music player footer');
	},
	_handleSignOut: function() {
		console.log('signing out');
	},
	handleArbView: function() {
		console.log('displaying the arb view');
	},
	_drawBars: function() {
		var barsIcon = document.createElement("i");
		barsIcon.className += " fa fa-bars bars-icon";
		barsIcon.id = "bars-icon"
		document.getElementById('left-navbar-control').appendChild(barsIcon);
	},
	_drawSignOut: function() {
		var signOut = document.createElement("i");
		signOut.className += " fa fa-sign-out sign-out-icon";
		signOut.id = "sign-out"
		document.getElementById('right-navbar-control').appendChild(signOut);
	},
	_drawMusic: function(onClick) {
		var musicIcon = document.createElement("i");
		musicIcon.className += " fa fa-music music-icon";
		musicIcon.id = "sign-out"
		document.getElementById('left-navbar-control').appendChild(musicIcon);
		musicIcon.addEventListener('click', onClick);
	},
	_drawContainer: function() {
		var navbarContainer = document.createElement("div");
		navbarContainer.className += "navbar-container ";
		navbarContainer.id += "navbar-container";
		document.getElementById("base-container").appendChild(navbarContainer);
	},

	_drawLeftNavigation: function(onClick) {
		var leftNavContainer = document.createElement("div");
		leftNavContainer.className += "left-navbar-control";
		leftNavContainer.id = "left-navbar-control";
		document.getElementById('navbar-container').appendChild(leftNavContainer);

		this._drawBars();
		this._drawMusic(onClick);
	},
	_drawRightNavigation: function() {
		var rightNavContainer = document.createElement("div");
		rightNavContainer.className += "right-navbar-control";
		rightNavContainer.id = "right-navbar-control";
		document.getElementById('navbar-container').appendChild(rightNavContainer);
		this._drawSignOut();
	},
	render: function(params) {
		this._drawContainer();
		this._drawLeftNavigation(params.onClick);
		this._drawRightNavigation();
	}
}

export default Navbar;