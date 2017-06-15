import Modal from "components/ui/Modal";
var PicsModal = {
	render: function() {
		console.log('rendering pics modal');
		var picsModal = document.createElement('div');
		picsModal.classList.add('pics-modal');
		picsModal.id = 'pics-modal';
		var picsModalHeader = document.createElement('div');
		picsModalHeader.classList.add('pics-modal-header');
		picsModalHeader.id = 'pics-modal-header';
		picsModalHeader.appendChild(document.createTextNode("picsModalHeader"));

		var picsModalContent = document.createElement('div');
		picsModalContent.classList.add('pics-modal-content');
		picsModalContent.id = 'pics-modal-content';

		var fileUploadButton = document.createElement('input');
		fileUploadButton.type = 'file';
		fileUploadButton.classList.add('upload-file');
		fileUploadButton.id = 'upload-file';
		picsModalContent.appendChild(fileUploadButton);

		var fileUploadButtonLabel = document.createElement('label');
		fileUploadButtonLabel.classList.add('file-upload-button-label');
		fileUploadButtonLabel.id = 'file-upload-button-label';
		fileUploadButtonLabel.htmlFor = 'upload-file';
		fileUploadButtonLabel.appendChild(document.createTextNode('Upload File'));
		picsModalContent.appendChild(fileUploadButtonLabel);



		picsModal.appendChild(picsModalHeader);
		picsModal.appendChild(picsModalContent);
		Modal.render(picsModal);
	}
}

export default PicsModal;