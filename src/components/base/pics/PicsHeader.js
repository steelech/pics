var PicsHeader = {
	render() {
		console.log('rendering PicsHeader');
		var fileUploadButton = document.createElement('div');
		fileUploadButton.classList.add('file-upload-button');
		fileUploadButton.id = 'file-upload-button';
		fileUploadButton.appendChild(document.createTextNode('+Pictures'));
		fileUploadButton.addEventListener('click', this._handleUploadButtonClick.bind(this));
		this.container.appendChild(fileUploadButton);
		var albumCreateButton = document.createElement('div');
		albumCreateButton.classList.add('add-album-button');
		albumCreateButton.id = 'add-album-button';
		albumCreateButton.appendChild(document.createTextNode('+Album'));
		albumCreateButton.addEventListener('click', this._handleUploadButtonClick.bind(this));
		this.container.appendChild(albumCreateButton);
		this.container.appendChild(document.createTextNode('Pictures'));
	}
};

export default PicsHeader;