import PicsRow from 'components/base/pics/PicsRow';
import PicsSlideshow from 'components/base/pics/PicsSlideshow';

const splitUpFiles = (files, numChunks) => {
  const fileList = [];
  for (let i = 0; i < numChunks; i += 1) {
    fileList.push(files.slice(i * 4, i * 4 + 4));
  }
  return fileList;
};

const PicsList = {
  handlePicClick(pic) {
    this.render({
      pics: this.pics,
      picid: pic.id,
      picsSlideshow: true,
      albumid: this.albumid,
      index: this.pics.indexOf(pic),
    });
  },
  render({ pics, picid, picsSlideshow, albumid, index, albumName }) {
    if (document.getElementById('pics-list')) {
      document.getElementById('pics-content').removeChild(document.getElementById('pics-list'));
    }
    this.pics = pics;
    this.picid = picid;
    this.picsSlideshow = picsSlideshow;
    this.albumid = albumid;
    this.index = index;

    const picsListContainer = document.createElement('div');
    picsListContainer.classList.add('pics-list');
    picsListContainer.id = 'pics-list';

    const numChunks = Math.ceil(this.pics.length / 4);
    const fileList = splitUpFiles(this.pics, numChunks);
    fileList.map((pics) => {
      const params = {
        pics,
        container: picsListContainer,
        picClick: pic => this.handlePicClick(pic),
      };
      PicsRow.render(params);
    });
    if (this.picid) {
      console.log('picid: ', this.picid);
      history.replaceState(null, null, `/pics/${this.picid}`);
      PicsSlideshow.render({ pics, picid, index, url: '/pics' });
    }
    document.getElementById('pics-content').appendChild(picsListContainer);
  },
};

export default PicsList;
