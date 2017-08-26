import PicsModal from 'components/base/pics/PicsModal';
import PicsHeader from 'components/base/pics/PicsHeader';
import PicsNav from 'components/base/pics/PicsNav';
import Pics from 'model/pics';
import PicsList from 'components/base/pics/PicsList';
import AlbumsIndex from 'components/base/pics/albums/index';

const picsIndex = {
  _showPics() {
    // tear down entire view
    while (document.getElementById('main-content').firstChild) {
      document
        .getElementById('main-content')
        .removeChild(document.getElementById('main-content').firstChild);
    }
    history.replaceState({}, {}, '/pics');
    this.render({
      pics: true,
    });
  },
  _showAlbums() {
    // tear down entire view
    while (document.getElementById('main-content').firstChild) {
      document
        .getElementById('main-content')
        .removeChild(document.getElementById('main-content').firstChild);
    }
    history.replaceState({}, {}, '/pics/albums');
    this.render({
      albums: true,
    });
  },
  _handlePicsUpload() {
    console.log('pics uploaded');
    this.render({});
  },
  _handleAlbumCreateClick() {
    const props = {};
  },
  _handleUploadButtonClick() {
    PicsModal.render({
      onSubmit: () => this._handlePicsUpload(),
    });
  },

  render(props) {
    this.props = props;
    while (document.getElementById('main-content').firstChild) {
      document
        .getElementById('main-content')
        .removeChild(document.getElementById('main-content').firstChild);
    }
    const container = document.createElement('div');
    this.container = container;
    this.container.classList.add('pics-container');
    this.container.id = 'pics-container';

    const picsContent = document.createElement('div');
    picsContent.classList.add('pics-content');
    picsContent.id = 'pics-content';

    const headerProps = {
      albums: props.albums,
      handleUploadButtonClick: () => this._handleUploadButtonClick(),
      container: this.container,
    };
    PicsHeader.render(headerProps);

    this.container.appendChild(picsContent);

    PicsNav.render({
      container: picsContent,
      tab: this.props.albums ? 'albums' : 'pics',
      handlePicsClick: () => this._showPics(),
      handleAlbumsClick: () => this._showAlbums(),
    });

    document.getElementById('main-content').appendChild(this.container);

    props.albums
      ? props.albumid ? AlbumsIndex.render() : AlbumsIndex.render()
      : Pics.get().then(PicsList.render);
  },
};

export default picsIndex;
