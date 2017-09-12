import PicsList from 'components/base/pics/PicsList';
import Pics from 'model/pics';

const AlbumPics = {
  render(props) {
    this.props = props;
    const { albumid } = this.props;
    console.log(`rendering AlbumPics, albumid: ${albumid}`);

    Pics.getByAlbum(albumid).then(PicsList.render);
  },
};

export default AlbumPics;
