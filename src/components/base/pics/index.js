// header(title) + album/pic create/upload buttons, margin bottom

import PicsModal from "components/base/pics/PicsModal";
import PicsHeader from "components/base/pics/PicsHeader";
import PicsNav from "components/base/pics/PicsNav";


var picsIndex = {
	_handlePicsUpload: function() {
		console.log('pics uploaded');
	},
	_handleAlbumCreateClick: function() {
		let props = {

		}

	},
	_handleUploadButtonClick: function() {
		let props = {

		}
		PicsModal.render({ onSubmit: this._handlePicsUpload.bind(this)});
	},

	render: function(props) {
		this.props = props;
		while(document.getElementById('main-content').firstChild) {
			document.getElementById('main-content').removeChild(document.getElementById('main-content').firstChild);
		}
		var container = document.createElement('div');
		this.container = container;
		this.container.classList.add('pics-container');
		this.container.id = 'pics-container';
		PicsHeader.render.call(this);
		PicsNav.render.call(this);

		document.getElementById('main-content').appendChild(this.container);

	}
}

export default picsIndex;