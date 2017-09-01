import PicsRow from 'components/base/pics/PicsRow';

const splitUpFiles = (files, numChunks) => {
  const fileList = [];
  for (let i = 0; i < numChunks; i += 1) {
    fileList.push(files.slice(i * 4, i * 4 + 4));
  }
  return fileList;
};
const PicsList = {
  render({ pics }) {
    console.log('rendering pics List: ', pics);

    const picsListContainer = document.createElement('div');
    picsListContainer.classList.add('pics-list');
    picsListContainer.id = 'pics-list';

    const numChunks = Math.ceil(pics.length / 4);
    const fileList = splitUpFiles(pics, numChunks);

    fileList.map((pics) => {
      const params = {
        pics,
        container: picsListContainer,
      };
      PicsRow.render(params);
    });
    document.getElementById('pics-content').appendChild(picsListContainer);
  },
};

export default PicsList;
