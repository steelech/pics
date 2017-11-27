import PicsList from 'components/base/pics/PicsList';
import Pics from 'model/pics';

const refetch = (id) => {
  history.replaceState(null, null, `/pics/albums/${this.props.albumid}`);
  this.render({
    albumid: this.props.albumid,
    albums: this.props.albums,
    picsSlideshow: true,
    picid: id,
  });
};

const AlbumPics = {
  render(props) {
    this.props = props;
    const { albumid } = this.props;

    Pics.getByAlbum(albumid).then(pics => PicsList.render({
      pics,
      picsSlideshow: false,
      albumid,
      onPicDelete: (id) => this.refetch(id),
      url: `/pics/albums/${albumid}`
    }));
  },
};

export default AlbumPics;
