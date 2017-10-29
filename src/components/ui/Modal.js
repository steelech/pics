const Modal = {
  _handleClick(event) {
    if (event.target.id === 'modal') {
      document.body.removeChild(document.getElementById('modal'));
      history.replaceState(null, null, this.url);
    }
  },
  tearDown() {
    if (document.getElementById('modal')) {
      document.body.removeChild(document.getElementById('modal'));
    }
  },
  render({ child, url }) {
    this.url = url;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = 'modal';
    modal.appendChild(child);
    modal.addEventListener('click', (e) => this._handleClick(e));
    document.body.appendChild(modal);
  },
};

export default Modal;
