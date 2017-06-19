// header(title) + album/pic create/upload buttons, margin bottom

import PicsModal from "components/base/pics/PicsModal";
import PicsHeader from "components/base/pics/PicsHeader";


var picsIndex = {
	_handleAlbumCreateClick: function() {
		let props = {

		}

	},
	_handleUploadButtonClick: function() {
		let props = {

		}
		PicsModal.render();
	},

	render: function(props) {
		while(document.getElementById('main-content').firstChild) {
			document.getElementById('main-content').removeChild(document.getElementById('main-content').firstChild);
		}
		var container = document.createElement('div');
		this.container = container;
		this.container.classList.add('pics-container');
		this.container.id = 'pics-container';
		PicsHeader.render.call(this);

		document.getElementById('main-content').appendChild(this.container);

	}
}

export default picsIndex;