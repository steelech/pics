const Modal = {
  _handleClick(event) {
    if (event.target.id == 'modal') {
      console.log('close');
      document.body.removeChild(document.getElementById('modal'));
    }
  },
  render(child) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'modal';
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.id = 'modal-content';
    modalContent.appendChild(child);
    modal.appendChild(modalContent);
    modal.addEventListener('click', this._handleClick);
    document.body.appendChild(modal);
  },
};

export default Modal;
