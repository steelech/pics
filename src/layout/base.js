import Navbar from "components/ui/Navbar";
import MusicPlayer from "components/ui/MusicPlayer";
import BaseContent from "components/base/BaseContent";
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
	_handleArbClose() {
		document.body.className = "";
		document.getElementById('base-container').className = 'base-container';
		document.body.removeChild(document.getElementById('close-arb'));
	},
	_handleBarsClick() {
		console.log('bars clicked');
		document.body.className = "home-login-background";
		document.getElementById('base-container').className += ' hidden';
		this.musicPlayerOpen = false;
		var bars = document.createElement("i");
		bars.className += " fa fa-times close-arb";
		bars.id = "close-arb";
		document.body.appendChild(bars);
		document.getElementById('close-arb').addEventListener('click', this._handleArbClose.bind(this));
	},
	_handleLogoutClick() {	
		document.body.className = "";
		while(document.body.firstChild) {
			document.body.removeChild(document.body.firstChild);
		}
		localStorage.setItem("credentials", JSON.stringify({}));
		history.replaceState(null, null, "/login");
		Router.route("/login", false);
	},
	render: function(params) {
		document.body.style = "margin: 0";
		var baseContainer = document.createElement("div");
		baseContainer.className += "base-container";
		baseContainer.id = "base-container";

		document.body.appendChild(baseContainer);
		Navbar.render({ 
			clickMusic: this._handleMusicClick.bind(this), 
			clickBars: this._handleBarsClick.bind(this), 
			clickLogout: this._handleLogoutClick.bind(this) 
		});

		BaseContent.render(params);
	}
}

export default baseView;
