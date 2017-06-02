import Navbar from "components/ui/Navbar";
import MusicPlayer from "components/ui/MusicPlayer";
import Router from 'router';

var baseView = {
	_handleMusicClick() {
		if(this.musicPlayerOpen) {
			MusicPlayer.tearDown();
			this.musicPlayerOpen = false;
		} else {
			MusicPlayer.render();
			this.musicPlayerOpen = true;
		}
	},
	_handleBarsClick() {
		console.log('handling bars click');
		// switch to ArbView (component??)
	},
	_handleLogoutClick() {	
		console.log('handling logout click');
		document.body.className = "";
		while(document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
		localStorage.setItem("credentials", JSON.stringify({}));
		history.replaceState(null, null, "/login");
		Router.route("/login", false);
		console.log('logged out');
		// _tearDownLoginView();
		// switch to login view (layout, possibly use router)
	},
	render: function(params) {
		document.body.style = "margin: 0";
		var baseContainer = document.createElement("div");
		baseContainer.className += "base-container";
		baseContainer.id = "base-container";

		document.body.appendChild(baseContainer);
		Navbar.render({ 
			clickMusic: this._handleMusicClick, 
			clickBars: this._handleBarsClick, 
			clickLogout: this._handleLogoutClick 
		});

		var contentContainer = document.createElement("div");
		contentContainer.className = "content-container";
		contentContainer.id = "content-container";
		contentContainer.appendChild(document.createTextNode("main content"));
		baseContainer.appendChild(contentContainer);
	}
}

export default baseView;
