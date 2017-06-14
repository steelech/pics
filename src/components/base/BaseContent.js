import BaseNav from 'components/base/BaseNav';
import SongsIndex from 'components/base/songs/index';
import PicsIndex from 'components/base/pics/index';

var BaseContent = {
	_clickSongs: () => {
		console.log('clicked songs');
		SongsIndex.render();
	},
	_clickPics: () => {
		console.log('clicked pics');	
		PicsIndex.render();
	},
	render: function(props) {
		console.log('this: ', this);
		let {
			pics,
			songs,
			picid,
			albums,
			albumid		
		} = props;

		console.log('props: ', props);
		var contentContainer = document.createElement("div");
		contentContainer.className = "content-container";
		contentContainer.id = "content-container";
		document.getElementById('base-container').appendChild(contentContainer);
		BaseNav.render({ 
			pics: pics, 
			songs: songs, 
			clickPics: this._clickPics, 
			clickSongs: this._clickSongs
		});
		var mainContent = document.createElement("div");
		mainContent.className = 'main-content';
		mainContent.id = 'main-content';
		contentContainer.appendChild(mainContent);
		props.songs ? SongsIndex.render(props) : PicsIndex.render(props);
	}
};

export default BaseContent;