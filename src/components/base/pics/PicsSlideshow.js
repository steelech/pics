import Modal from 'components/ui/Modal';
import Pics from 'model/pics';


const PicsSlideshow = {
  nextPic() {
    if (this.index + 1 < this.pics.length) {
      this.index = this.index + 1;
    }
    history.replaceState(null, null, `/pics/${this.pics[this.index]._id}`);
    this.modalContent.style = `background-image: url(${this.pics[this.index].ssUrl});background-repeat:no-repeat;background-position: center;`;
  },
  prevPic() {
    if (this.index - 1 >= 0) {
      this.index = this.index - 1;
    }
    history.replaceState(null, null, `/pics/${this.pics[this.index]._id}`);
    this.modalContent.style = `background-image: url(${this.pics[this.index].ssUrl});background-repeat:no-repeat;background-position: center;`;
  },

  keyPressHandler(e) {
    if (e.keyCode === 37) {
      this.prevPic();
    }
    if (e.keyCode === 39) {
      this.nextPic();
    }
  },
  render({ pics, picid, index, hidden = true, onPicDelete }) {
    Modal.tearDown();
    const handler = this.keyPressHandler.bind(this);
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        Modal.tearDown();
        document.removeEventListener('keydown', handler);
      }
    });
    document.addEventListener('keydown', handler);
    this.pics = pics;
    this.index = index;
    this.hidden = hidden;
    this.onPicDelete = onPicDelete;

    if (typeof index === 'undefined') {
      this.index = pics.indexOf(pics.find(pic => pic._id === picid));
    }


    this.modalContent = document.createElement('div');
    this.modalContent.id = 'pics-slideshow';
    this.modalContent.classList.add('pics-slideshow');
    this.modalContent.style = `background-image: url(${pics[this.index].ssUrl});background-repeat:no-repeat;background-position: center;`;

    const contentWrapper = document.createElement('div');
    contentWrapper.id = 'content-wrapper';
    contentWrapper.classList.add('content-wrapper');
    contentWrapper.addEventListener('mouseleave', () => {
      contentWrapper.classList.add('hide');
    });
    contentWrapper.addEventListener('mouseenter', () => {
      contentWrapper.classList.remove('hide');
    });
    if (this.hidden) {
      contentWrapper.classList.add('hide');
    }

    const leftWrapper = document.createElement('div');
    leftWrapper.classList.add('left-wrapper');
    leftWrapper.id = 'left-wrapper';

    const leftArrowWrapper = document.createElement('div');
    leftArrowWrapper.classList.add('left-arrow-wrapper');
    leftArrowWrapper.id = 'left-arrow-wrapper';

    const leftArrow = document.createElement('i');
    leftArrow.classList.add('fa');
    leftArrow.classList.add('fa-arrow-left');
    leftArrow.onclick = () => this.prevPic();

    const deleteWrapper = document.createElement('div');
    deleteWrapper.classList.add('delete-wrapper');
    deleteWrapper.id = 'delete-wrapper';
    const deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-button');
    deleteButton.id = 'delete-button';

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa');
    deleteIcon.classList.add('fa-trash-o');
    deleteIcon.onclick = () => {
      var id = null;
      Pics.delete(this.pics[this.index]._id)
        .then(response => {
          var id = this.pics.length > 1
            ? this.index - 1 >= 0
              ? this.pics[this.index - 1]._id
              : this.pics[this.index + 1]._id
            : null
          document.removeEventListener('keydown', handler);
          this.onPicDelete(id);
        });
    };
    deleteButton.appendChild(deleteIcon);

    leftArrowWrapper.appendChild(leftArrow);
    leftWrapper.appendChild(leftArrowWrapper);
    deleteWrapper.appendChild(deleteButton);
    leftWrapper.appendChild(deleteWrapper);

    const rightWrapper = document.createElement('div');
    rightWrapper.classList.add('right-wrapper');
    rightWrapper.id = 'right-wrapper';

    const closeWrapper = document.createElement('div');
    closeWrapper.classList.add('close-wrapper');
    closeWrapper.id = closeWrapper;

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa');
    closeIcon.classList.add('fa-times');
    closeIcon.onclick = () => {
      document.removeEventListener('keydown', handler);
      Modal.tearDown();
    };
    closeWrapper.appendChild(closeIcon);

    const rightArrowWrapper = document.createElement('div');
    rightArrowWrapper.classList.add('right-arrow-wrapper');
    rightArrowWrapper.id = 'right-arrow-wrapper';

    const rightArrow = document.createElement('i');
    rightArrow.classList.add('fa');
    rightArrow.classList.add('fa-arrow-right');
    rightArrow.onclick = () => this.nextPic();

    const downloadWrapper = document.createElement('div');
    downloadWrapper.classList.add('download-wrapper');
    downloadWrapper.id = 'download-wrapper';

    const downloadButton = document.createElement('div');
    downloadButton.classList.add('download-button');
    downloadButton.id = 'download-button';

    const downloadIcon = document.createElement('i');
    downloadIcon.classList.add('fa');
    downloadIcon.classList.add('fa-download');
    downloadIcon.onclick = () => window.open(this.pics[this.index].url);
    downloadButton.appendChild(downloadIcon);

    rightWrapper.appendChild(closeWrapper);
    rightArrowWrapper.appendChild(rightArrow);
    rightWrapper.appendChild(rightArrowWrapper);
    downloadWrapper.appendChild(downloadButton);
    rightWrapper.appendChild(downloadWrapper);

    contentWrapper.appendChild(leftWrapper);
    contentWrapper.appendChild(rightWrapper);
    this.modalContent.appendChild(contentWrapper);
    Modal.render({ child: this.modalContent, url: '/pics' });
  },
};
export default PicsSlideshow;
