


var BaseNav = {
	_handlePicsTabClick() {
		document.getElementById('pics-tab').classList.add('selected');
		document.getElementById('songs-tab').classList.remove('selected');
		history.replaceState({}, {}, '/pics');
		this.props.clickPics();
	},
	_handleSongsTabClick() {
		document.getElementById('songs-tab').classList.add('selected');
		document.getElementById('pics-tab').classList.remove('selected');
		history.replaceState({}, {}, '/songs');
		this.props.clickSongs();
	},

	// terrible, refactor asap
	render: function(props) {
		console.log('base nav:',  props);
		this.props = props;
		console.log('this.props: ', props);
		let container = document.createElement('div');
		container.className = 'basenav-container';
		container.id = 'basenav-container';
		let leftNav = document.createElement('div');
		leftNav.className = 'leftnav-container';
		leftNav.id = 'leftnav-container';
		let picsTab = document.createElement('div');
		picsTab.className = 'pics-tab';
		picsTab.id = 'pics-tab';
		picsTab.appendChild(document.createTextNode('Pics'));
		picsTab.addEventListener('click', () => this._handlePicsTabClick());
		let songsTab = document.createElement('div');
		songsTab.className = 'songs-tab';
		songsTab.id = 'songs-tab';
		songsTab.appendChild(document.createTextNode('Songs'));
		songsTab.addEventListener('click', () => this._handleSongsTabClick());

		if(props.songs) {
			songsTab.classList.add('selected');
		} else {
			picsTab.classList.add('selected');
			if(!props.pics) {
				history.replaceState({}, {}, '/pics');
			}
		}



		leftNav.appendChild(picsTab);
		leftNav.appendChild(songsTab);
		container.appendChild(leftNav);
		document.getElementById('content-container').appendChild(container);

	}
}

export default BaseNav;