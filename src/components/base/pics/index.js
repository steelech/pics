import PicsModal from "components/base/pics/PicsModal";

var picsIndex = {
	_handleUploadButtonClick: function() {
		PicsModal.render();
	},


	render: function(props) {

		var container = document.createElement('div');
		container.classList.add('pics-container');
		container.id = 'pics-container';
		container.appendChild(document.createTextNode('picss index'));
		while(document.getElementById('main-content').firstChild) {
			document.getElementById('main-content').removeChild(document.getElementById('main-content').firstChild);
		}


		var fileUploadButton = document.createElement('div');
		fileUploadButton.classList.add('file-upload-button');
		fileUploadButton.id = 'file-upload-button';
		fileUploadButton.appendChild(document.createTextNode('myButton'));
		fileUploadButton.addEventListener('click', this._handleUploadButtonClick.bind(this));
		container.appendChild(fileUploadButton);

		document.getElementById('main-content').appendChild(container);

	}
}

export default picsIndex;