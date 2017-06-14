import Modal from "components/ui/Modal";
var PicsModal = {
	render: function() {
		console.log('rendering pics modal');
		var picsModal = document.createElement('div');
		picsModal.classList.add('pics-modal');
		picsModal.id = 'pics-modal';
		picsModal.appendChild(document.createTextNode("picsModal"));
		Modal.render(picsModal);
	}
}

export default PicsModal;