import Modal from 'components/ui/modal';

const AlbumsModal = {
  drawHeader({ container }) {
    console.log('rendering AlbumsModal header');

    const wrapper = document.createElement('div');
    wrapper.id = 'albums-modal-header';
    wrapper.classList.add('albums-modal-header');

    const headerText = document.createElement('h1');
    headerText.id = 'albums-modal-header-text';
    headerText.classList.add('albums-modal-header-text');
    headerText.appendChild(document.createTextNode('Albums Modal Header'));

    wrapper.appendChild(headerText);
    container.appendChild(wrapper);
  },
  drawForm({ container }) {
    console.log('rendering AlbumsModal form');
    const wrapper = document.createElement('div');
    wrapper.id = 'albums-modal-form';
    wrapper.classList.add('albums-modal-form');
    wrapper.appendChild(document.createTextNode('Albums Modal Form'));
    container.appendChild(wrapper);
  },
  render() {
    console.log('rendering albums modal');
    const container = document.createElement('div');
    container.id = 'albums-modal';
    container.classList.add('albums-modal');
    this.drawHeader({ container });
    this.drawForm({ container });
    Modal.render(container);
  },
};

export default AlbumsModal;
