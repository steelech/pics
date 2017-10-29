const Modal = {
  _handleClick(event) {
    if (event.target.id == 'modal') {
      document.body.removeChild(document.getElementById('modal'));
    }
  },
  tearDown() {
    if (document.getElementById('modal')) {
      document.body.removeChild(document.getElementById('modal'));
    }
  },
  render(child) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'modal';
    modal.appendChild(child);
    modal.addEventListener('click', this._handleClick);
    document.body.appendChild(modal);
  },
};

export default Modal;
