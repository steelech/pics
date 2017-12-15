import PicsModal from 'components/base/pics/PicsModal';
import PicsHeader from 'components/base/pics/PicsHeader';
import PicsNav from 'components/base/pics/PicsNav';
import Pics from 'model/pics';
import Albums from 'model/albums';
import PicsList from 'components/base/pics/PicsList';
import AlbumsIndex from 'components/base/pics/albums/index';
import AlbumsModal from 'components/base/pics/albums/AlbumsModal';
import AlbumPics from 'components/base/pics/albums/AlbumPics';

const picsIndex = {
  _showAlbum(id) {
    history.replaceState({}, {}, `/pics/albums/${id}`);
    this.render({
      albums: true,
      albumid: id,
    });
  },
  refetch(id) {
    const url = this.props.albums
      ? this.props.albumid
        ? `/pics/albums/${this.props.albumid}`
        : '/pics/albums'
      : '/pics'
    history.replaceState(null, null, url);
    console.log('rerendering: ', this.props);
    this.render({
      albumid: this.props.albumid,
      albums: this.props.albums,
      picsSlideshow: true,
      picid: id,
    });
  },
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
  _handlePicsUpload(albumid) {
    const path = albumid ? `/pics/albums/${albumid}` : '/pics';
    history.replaceState({}, {}, path);
    this.render({
      albums: !!albumid,
      albumid,
    });
  },
  handleAlbumSubmit(albumId) {
    history.replaceState({}, {}, `/pics/albums/${albumId}`);
    this.render({
      albums: true,
      albumid: albumId,
    });
  },
  _handleAlbumCreateClick() {
    AlbumsModal.render({
      onSubmit: albumId => this.handleAlbumSubmit(albumId),
    });
  },
  _handleUploadButtonClick() {
    PicsModal.render({
      onSubmit: albumid => this._handlePicsUpload(albumid),
    });
  },

  render(props) {
    this.props = props;

    if(document.getElementById('modal')) {
      document.body.removeChild(document.getElementById('modal'))
    }
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

    // for both the header and actual content, we might need to retrieve an
    // album name given an albumid
    // we dont want to repeat the same logic twice (once for albumid, once for no albumid),
    const id = (this.props || {}).albumid;
    Albums.get(id).then((albums) => {
      const hasId = album => album._id === parseInt(id);

      const albumName = this.props.albumid ? albums.find(hasId).name : null;
      const headerProps = {
        albums: props.albums,
        albumName,
        handleUploadButtonClick: () => this._handleUploadButtonClick(),
        handleAlbumCreateClick: () => this._handleAlbumCreateClick(),
        handleBackClick: () => this.render({ albums: true }),
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

      const params = {
        onAlbumSelect: id => this._showAlbum(id),
      };

      this.props.albums
        ? this.props.albumid
          ? AlbumPics.render({
            picsSlideshow: this.props.picsSlideshow,
            picid: this.props.picid,
            albumid: this.props.albumid,
            onDelete: picid => this.refetch(picid)
          })
          : AlbumsIndex.render(params)
        : Pics.get().then(pics => {
          PicsList.render({
            pics,
            picid: this.props.picid,
            picsSlideshow: this.props.picsSlideshow,
            onPicDelete: (id) => this.refetch(id),
            url: '/pics',
          })
        },
        );
    });
  },
};

export default picsIndex;
