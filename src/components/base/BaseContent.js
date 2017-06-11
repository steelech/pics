import BaseNav from 'components/base/BaseNav';

var BaseContent = {
	_clickSongs: () => {
		console.log('clicked songs');
	},
	_clickPics: () => {
		console.log('clicked pics');	
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
	}
};

export default BaseContent;