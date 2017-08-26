import Thumbnail from 'components/base/pics/Thumbnail';

const PicsRow = {
  render({ pics, container }) {
    console.log('rendering PicsRow');
    const row = document.createElement('div');
    row.id = 'pics-row';
    row.classList.add('pics-row');
    pics.map((pic) => {
      const params = {
        pic,
        container: row,
      };
      return Thumbnail.render(params);
    });
    container.appendChild(row);
  },
};

export default PicsRow;
