const albumsIndex = {
  render() {
    console.log('rendering albums index');
    // pics-content
    const container = document.createElement('div');
    container.id = 'albums-index';
    container.classList.add('albums-index');
    document.getElementById('pics-content').appendChild(container);
  },
};

export default albumsIndex;
