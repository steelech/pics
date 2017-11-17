import Modal from 'components/ui/Modal';


const PicsSlideshow = {
  nextPic() {
    if (this.index + 1 < this.pics.length) {
      this.index = this.index + 1;
    }
    history.replaceState(null, null, `/pics/${this.pics[this.index].id}`);
    this.modalContent.style = `background-image: url(${this.pics[this.index].ssUrl});background-repeat:no-repeat;background-position: center;`;
  },
  prevPic() {
    if (this.index - 1 >= 0) {
      this.index = this.index - 1;
    }
    history.replaceState(null, null, `/pics/${this.pics[this.index].id}`);
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
  render({ pics, picid, index, hidden = true }) {
    Modal.tearDown();
    const handler = this.keyPressHandler.bind(this);
    document.addEventListener('click', (e) => {
      if (e.target.id === 'modal') {
        document.removeEventListener('keydown', handler);
      }
    });
    document.addEventListener('keydown', handler);
    this.pics = pics;
    this.index = index;
    this.hidden = hidden;

    if (typeof index === 'undefined') {
      this.index = pics.indexOf(pics.find(pic => pic.id === picid));
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

    const downloadWrapper = document.createElement('div');
    downloadWrapper.classList.add('download-wrapper');
    downloadWrapper.id = 'download-wrapper';
    downloadWrapper.appendChild(document.createTextNode('download-wrapper'));

    leftArrowWrapper.appendChild(leftArrow);
    leftWrapper.appendChild(leftArrowWrapper);
    leftWrapper.appendChild(downloadWrapper);

    const rightWrapper = document.createElement('div');
    rightWrapper.classList.add('right-wrapper');
    rightWrapper.id = 'right-wrapper';

    const rightArrowWrapper = document.createElement('div');
    rightArrowWrapper.classList.add('right-arrow-wrapper');
    rightArrowWrapper.id = 'right-arrow-wrapper';

    const rightArrow = document.createElement('i');
    rightArrow.classList.add('fa');
    rightArrow.classList.add('fa-arrow-right');

    const deleteWrapper = document.createElement('div');
    deleteWrapper.classList.add('delete-wrapper');
    deleteWrapper.id = 'download-wrapper';
    deleteWrapper.appendChild(document.createTextNode('delete-wrapper-wrapper'));

    rightArrowWrapper.appendChild(rightArrow);
    rightWrapper.appendChild(rightArrowWrapper);
    rightWrapper.appendChild(deleteWrapper);

    contentWrapper.appendChild(leftWrapper);
    contentWrapper.appendChild(rightWrapper);
    this.modalContent.appendChild(contentWrapper);
    Modal.render({ child: this.modalContent, url: '/pics' });
  },
};
export default PicsSlideshow;
