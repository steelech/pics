const Modal = {
  _handleClick(event) {
    if (event.target.id === 'modal' && !this.locked) {
      document.body.removeChild(document.getElementById('modal'));
      history.replaceState(null, null, this.url);
    }
  },
  tearDown() {
    if (document.getElementById('modal')) {
      document.body.removeChild(document.getElementById('modal'));
      history.replaceState(null, null, this.url);
    }
  },
  lock() {
    this.locked = true;
  },
  render({ child, url }) {
    this.locked = false;
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
