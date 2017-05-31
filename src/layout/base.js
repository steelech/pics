import Navbar from "components/ui/Navbar";
import MusicPlayer from "components/ui/MusicPlayer";

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
	render: function(params) {
		document.body.style = "margin: 0";
		var baseContainer = document.createElement("div");
		baseContainer.className += "base-container";
		baseContainer.id = "base-container";
		document.body.appendChild(baseContainer);
		// this.musicPlayerOpen = false;
		Navbar.render({ onClick: this._handleMusicClick });
		var contentContainer = document.createElement("div");
		contentContainer.className = "content-container";
		contentContainer.id = "content-container";
		contentContainer.appendChild(document.createTextNode("main content"));
		baseContainer.appendChild(contentContainer)
	}
}

export default baseView;
