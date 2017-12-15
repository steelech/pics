import Modal from 'components/ui/modal';

const tearDownLoader = () => {
  const wrapper = document.getElementById('modal');
  if (wrapper) {
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
  }
  document.body.removeChild(wrapper);
};

const AlbumsModalLoader = {
  tearDown() {
    const wrapper = document.getElementById('modal');
    while (this.wrapper.firstChild) {
      this.wrapper.removeChild(this.wrapper.firstChild);
    }
    document.body.removeChild(wrapper);
  },
  render({ wrapper }) {
    this.wrapper = wrapper;
    console.log('rendering AlbumsModalLoader');
    Modal.lock();
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
    const loadingSpinner = document.createElement('div');
    loadingSpinner.id = 'loading-spinner';
    loadingSpinner.classList.add('loading-spinner');

    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.classList.add('loader');
    loadingSpinner.appendChild(loader);
    wrapper.appendChild(loadingSpinner);
    const refreshWarning = document.createElement('div');
    refreshWarning.id = 'refresh-warning';
    refreshWarning.classList.add('refresh-warning');
    refreshWarning.appendChild(
      document.createTextNode('Processing pictures. Please do not refresh.'),
    );
    wrapper.appendChild(refreshWarning);
  },
};

export default AlbumsModalLoader;
