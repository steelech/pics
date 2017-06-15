import Modal from "components/ui/Modal";
var PicsModal = {
	_handleDrop: function(event) {
		event.preventDefault();
		console.log('drop event: ', event);
		let files = event.dataTransfer.files;

		for(let index = 0;index < files.length; index++) {
			console.log(files[index]);
		}
	},
	render: function() {
		console.log('rendering pics modal');
		var picsModal = document.createElement('div');
		picsModal.classList.add('pics-modal');
		picsModal.id = 'pics-modal';
		picsModal.ondragenter = function(event) {
			event.preventDefault();
			console.log('drag enter');
		}
		picsModal.ondragleave = function(event) {
			event.preventDefault();
			console.log('drag leave');
		}
		picsModal.ondrop = this._handleDrop;

		picsModal.ondragover = function(event) {
			event.preventDefault();
		}
		var picsModalHeader = document.createElement('div');
		picsModalHeader.classList.add('pics-modal-header');
		picsModalHeader.id = 'pics-modal-header';
		var headerText = document.createElement('h1');
		headerText.classList.add('header-text');
		headerText.id = 'pics-modal-header-text';
		headerText.appendChild(document.createTextNode('Add Pics'));
		picsModalHeader.appendChild(headerText);

		var picsModalContent = document.createElement('div');
		picsModalContent.classList.add('pics-modal-content');
		picsModalContent.id = 'pics-modal-content';

		var fileUploadButton = document.createElement('input');
		fileUploadButton.type = 'file';
		fileUploadButton.classList.add('upload-file');
		fileUploadButton.id = 'upload-file';
		fileUploadButton.multiple = "multiple";
		fileUploadButton.onchange = function(event) {
			console.log('event: ', event);
		} 
		picsModalContent.appendChild(fileUploadButton);

		var fileUploadButtonLabel = document.createElement('label');
		fileUploadButtonLabel.classList.add('file-upload-button-label');
		fileUploadButtonLabel.id = 'file-upload-button-label';
		fileUploadButtonLabel.htmlFor = 'upload-file';
		fileUploadButtonLabel.appendChild(document.createTextNode('Browse Files'));
		picsModalContent.appendChild(fileUploadButtonLabel);

		var dragAndDrop = document.createElement('div');
		dragAndDrop.classList.add('pics-drag-and-drop');
		dragAndDrop.id = 'pics-drag-and-drop';
		dragAndDrop.appendChild(document.createTextNode('or Drag and Drop'));
		picsModalContent.appendChild(dragAndDrop);



		picsModal.appendChild(picsModalHeader);
		picsModal.appendChild(picsModalContent);
		Modal.render(picsModal);
	}
}

export default PicsModal;