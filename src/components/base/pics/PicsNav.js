var PicsNav = {
	_handlePicsClick: () => {
		console.log('clicked pics, fuck you dude');
		debugger
	},
	_handleAlbumsClick: () => {
		console.log('clicked albums, fuck off');
		debugger
	},
	render(props) {
		console.log('rendering pics nav');
		this.container = props.container;

		var navContainer = document.createElement('div');
		navContainer.classList.add('pics-nav-container');
		navContainer.id = 'pics-nav-container';

		var picsOptionContainer = document.createElement('div');
		picsOptionContainer.classList.add('pics-option-container');
		picsOptionContainer.id = 'pics-option-container';
		picsOptionContainer.appendChild(document.createTextNode('Pics'));

		var albumsOptionContainer = document.createElement('div');
		albumsOptionContainer.classList.add('albums-option-container');
		albumsOptionContainer.id = 'albums-option-container';
		albumsOptionContainer.appendChild(document.createTextNode('Albums'));	

		this.activeTab = (props.tab === 'albums' ? albumsOptionContainer : picsOptionContainer);
		this.activeTab.classList.add('active');	


		picsOptionContainer.addEventListener('click', this._handlePicsClick);

		albumsOptionContainer.addEventListener('click', this._handleAlbumsClick);

		navContainer.appendChild(picsOptionContainer);
		navContainer.appendChild(albumsOptionContainer);


		this.container.appendChild(navContainer);

	}
}

export default PicsNav;