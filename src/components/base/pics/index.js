import PicsModal from "components/base/pics/PicsModal";
import PicsHeader from "components/base/pics/PicsHeader";
import PicsNav from "components/base/pics/PicsNav";


var picsIndex = {
	_showPics: function() {
		// tear down entire view
		while(document.getElementById('main-content').firstChild) {
			document.getElementById('main-content').removeChild(document.getElementById('main-content').firstChild);
		}
		history.replaceState({}, {}, '/pics');
		this.render({
			pics: true,
		})
	},
	_showAlbums: function() {
		// tear down entire view
		while(document.getElementById('main-content').firstChild) {
			document.getElementById('main-content').removeChild(document.getElementById('main-content').firstChild);
		}
		history.replaceState({}, {}, '/pics/albums');
		this.render({
			albums: true
		})
	},
	_handlePicsUpload: function() {
		console.log('pics uploaded');
	},
	_handleAlbumCreateClick: function() {
		let props = {

		}

	},
	_handleUploadButtonClick: function() {
		PicsModal.render({ 
			onSubmit: this._handlePicsUpload
		});
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

		let headerProps = {
			handleUploadButtonClick: this._handleUploadButtonClick.bind(this),
			container: this.container
		}
		PicsHeader.render(headerProps);

		PicsNav.render({
			container: this.container,
			tab: this.props.albums ? 'albums' : 'pics',
			handlePicsClick: this._showPics.bind(this),
			handleAlbumsClick: this._showAlbums.bind(this)
		});

		document.getElementById('main-content').appendChild(this.container);

	}
}

export default picsIndex;