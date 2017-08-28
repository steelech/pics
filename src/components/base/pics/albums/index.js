const albumsIndex = {
  render() {
    const container = document.createElement('div');
    container.id = 'albums-index';
    container.classList.add('albums-index');
    document.getElementById('pics-content').appendChild(container);
  },
};

export default albumsIndex;
