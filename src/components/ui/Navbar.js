


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
	_drawBars: function(onClick) {
		var barsIcon = document.createElement("i");
		barsIcon.className += " fa fa-bars bars-icon";
		barsIcon.id = "bars-icon"
		document.getElementById('left-navbar-control').appendChild(barsIcon);
		barsIcon.addEventListener('click', onClick);
	},
	_drawSignOut: function(onClick) {
		var signOut = document.createElement("i");
		signOut.className += " fa fa-sign-out sign-out-icon";
		signOut.id = "sign-out"
		document.getElementById('right-navbar-control').appendChild(signOut);
		signOut.addEventListener('click', onClick)
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

	_drawLeftNavigation: function(clickMusic, clickBars) {
		var leftNavContainer = document.createElement("div");
		leftNavContainer.className += "left-navbar-control";
		leftNavContainer.id = "left-navbar-control";
		document.getElementById('navbar-container').appendChild(leftNavContainer);

		this._drawBars(clickBars);
		this._drawMusic(clickMusic);
	},
	_drawRightNavigation: function(clickLogout) {
		var rightNavContainer = document.createElement("div");
		rightNavContainer.className += "right-navbar-control";
		rightNavContainer.id = "right-navbar-control";
		document.getElementById('navbar-container').appendChild(rightNavContainer);
		this._drawSignOut(clickLogout);
	},
	render: function(params) {
		this._drawContainer();
		this._drawLeftNavigation(params.clickMusic, params.clickBars);
		this._drawRightNavigation(params.clickLogout);
	}
}

export default Navbar;