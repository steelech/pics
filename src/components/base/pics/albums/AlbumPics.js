import PicsList from 'components/base/pics/PicsList';
import Pics from 'model/pics';


const AlbumPics = {
  render(props) {
    this.props = props;
    const { albumid } = this.props;

    Pics.getByAlbum(albumid).then(pics => PicsList.render({ pics, picsSlideshow: false, albumid }));
  },
};

export default AlbumPics;
