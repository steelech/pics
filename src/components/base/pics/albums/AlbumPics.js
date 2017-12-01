import PicsList from 'components/base/pics/PicsList';
import Pics from 'model/pics';


const AlbumPics = {
  render(props) {
    this.props = props;
    const { albumid, picsSlideshow, onDelete, picid } = this.props;
    const url = albumid ? `/pics/albums/${albumid}` : '/pics/albums';

    Pics.getByAlbum(albumid).then(pics => PicsList.render({
      picid,
      pics,
      picsSlideshow,
      albumid,
      onPicDelete: onDelete,
      url
    }));
  },
};

export default AlbumPics;
