import PicsRow from 'components/base/pics/PicsRow';

const splitUpFiles = (files, numChunks) => {
  const fileList = [];
  for (let i = 0; i < numChunks; i += 1) {
    fileList.push(files.slice(i * 4, i * 4 + 4));
  }
  return fileList;
};

const PicsList = {
  handlePicClick(pic) {
    console.log('PICSLIST KNOWS', pic);
    // re-render view w/ picsSlideshow = true
    this.render({
      pics: this.pics,
      picsSlideshow: true,
      albumid: this.albumid
    })
  },
  render({ pics, picsSlideshow, albumid }) {
    this.pics = pics;
    this.picsSlideshow = picsSlideshow;
    this.albumid = albumid;

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
    document.getElementById('pics-content').appendChild(picsListContainer);
  },
};

export default PicsList;
