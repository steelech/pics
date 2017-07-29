import BaseNav from 'components/base/BaseNav';
import SongsIndex from 'components/base/songs/index';
import PicsIndex from 'components/base/pics/index';

const BaseContent = {
  clickSongs() {
    this.render({ songs: true });
  },
  clickPics() {
    this.render({ pics: true, albums: this.props.albums });
  },
  render(props) {
    if (document.getElementById('content-container')) {
      document
        .getElementById('base-container')
        .removeChild(document.getElementById('content-container'));
    }
    this.props = props;
    const { pics, songs } = props;
    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';
    contentContainer.id = 'content-container';
    document.getElementById('base-container').appendChild(contentContainer);
    BaseNav.render({
      pics,
      songs,
      clickPics: () => this.clickPics(),
      clickSongs: () => this.clickSongs(),
    });
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    mainContent.id = 'main-content';
    contentContainer.appendChild(mainContent);
    return props.songs ? SongsIndex.render(props) : PicsIndex.render(props);
  },
};

export default BaseContent;
