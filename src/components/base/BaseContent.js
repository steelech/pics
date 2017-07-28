import BaseNav from 'components/base/BaseNav';
import SongsIndex from 'components/base/songs/index';
import PicsIndex from 'components/base/pics/index';

const BaseContent = {
  _clickSongs() {
    console.log('clicked songs');
    this.render({ songs: true });
  },
  _clickPics() {
    console.log('clicked pics');
    this.render({ pics: true, albums: this.props.albums });
  },
  render(props) {
    if (document.getElementById('content-container')) {
      document
        .getElementById('base-container')
        .removeChild(document.getElementById('content-container'));
    }
    console.log('this: ', this);
    this.props = props;
    const { pics, songs, picid, albums, albumid } = props;
    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';
    contentContainer.id = 'content-container';
    document.getElementById('base-container').appendChild(contentContainer);
    BaseNav.render({
      pics,
      songs,
      clickPics: () => this._clickPics(),
      clickSongs: () => this._clickSongs(),
    });
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    mainContent.id = 'main-content';
    contentContainer.appendChild(mainContent);
    props.songs ? SongsIndex.render(props) : PicsIndex.render(props);
  },
};

export default BaseContent;
