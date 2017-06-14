var Modal = {
	_handleClick: function(event) {
		if(event.target.id == 'modal') {
			console.log('close');
			document.body.removeChild(document.getElementById('modal'));
		}

	},
	render: function() {
		var modal = document.createElement('div');
		modal.classList.add('modal');
		modal.id = 'modal';
		var modalContent = document.createElement('div');
		modalContent.classList.add('modal-content');
		modalContent.id = 'modal-content';
		modalContent.appendChild(document.createTextNode('modalContent'))
		modal.appendChild(modalContent);
		modal.addEventListener('click', this._handleClick);
		document.body.appendChild(modal);
	}
}

export default Modal;