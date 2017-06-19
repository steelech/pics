var PicsHeader = {
	render() {
		console.log('rendering PicsHeader');
		var buttonsContainer = document.createElement('div');
		buttonsContainer.classList.add('buttons-container');
		buttonsContainer.id = 'buttons-container';
		this.container.appendChild(buttonsContainer);
		var fileUploadButton = document.createElement('div');
		fileUploadButton.classList.add('file-upload-button');
		fileUploadButton.id = 'file-upload-button';
		fileUploadButton.appendChild(document.createTextNode('+Pictures'));
		fileUploadButton.addEventListener('click', this._handleUploadButtonClick.bind(this));
		buttonsContainer.appendChild(fileUploadButton);
		var albumCreateButton = document.createElement('div');
		albumCreateButton.classList.add('add-album-button');
		albumCreateButton.id = 'add-album-button';
		albumCreateButton.appendChild(document.createTextNode('+Album'));
		albumCreateButton.addEventListener('click', this._handleUploadButtonClick.bind(this));
		buttonsContainer.appendChild(albumCreateButton);
		this.container.appendChild(buttonsContainer);
		var picsHeaderText = document.createElement('div');
		picsHeaderText.classList.add('pics-header-text');
		picsHeaderText.id = 'pics-header-text';
		picsHeaderText.appendChild(document.createTextNode('Pictures'));
		this.container.appendChild(picsHeaderText);
	}
};

export default PicsHeader;