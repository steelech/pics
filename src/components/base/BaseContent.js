import BaseNav from 'components/base/BaseNav';
import SongsIndex from 'components/base/songs/index';
import PicsIndex from 'components/base/pics/index';

var BaseContent = {
	_clickSongs: function() {
		console.log('clicked songs');
		this.render({
			songs: true
		});
	},
	_clickPics: function() {
		console.log('clicked pics');
		this.render({
			pics: true,
			albums: this.props.albums
		});
	},
	_clickPicsNav: function(albums) {
		this.render({
			pics: true,
			albums: albums
		})

	},
	render: function(props) {
		// remove the div, if there
		if(document.getElementById('content-container')) {
			document.getElementById('base-container').removeChild(document.getElementById('content-container'));
		}
		console.log('this: ', this);
		this.props = props;
		let {
			pics,
			songs,
			picid,
			albums,
			albumid
		} = props;

		var contentContainer = document.createElement("div");
		contentContainer.className = "content-container";
		contentContainer.id = "content-container";
		document.getElementById('base-container').appendChild(contentContainer);
		BaseNav.render({
			pics: pics,
			songs: songs,
			clickPics: () => this._clickPics(),
			clickSongs: () => this._clickSongs(),
		});
		var mainContent = document.createElement("div");
		mainContent.className = 'main-content';
		mainContent.id = 'main-content';
		contentContainer.appendChild(mainContent);
		props.songs ? SongsIndex.render(props) : PicsIndex.render(props);
	}
};

export default BaseContent;
