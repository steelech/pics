import BaseNav from 'components/base/BaseNav';
import SongsIndex from 'components/base/songs/index';
import PicsIndex from 'components/base/pics/index';

var BaseContent = {
	_clickSongs: () => {
		console.log('clicked songs');
		SongsIndex.render(this.props);
	},
	_clickPics: () => {
		console.log('clicked pics');	
		PicsIndex.render(this.props);
	},
	render: function(props) {
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
			clickPics: this._clickPics.bind(this), 
			clickSongs: this._clickSongs.bind(this)
		});
		var mainContent = document.createElement("div");
		mainContent.className = 'main-content';
		mainContent.id = 'main-content';
		contentContainer.appendChild(mainContent);
		props.songs ? SongsIndex.render(props) : PicsIndex.render(props);
	}
};

export default BaseContent;