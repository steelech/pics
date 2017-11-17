import Modal from 'components/ui/Modal';


const PicsSlideshow = {
  nextPic() {
    if (this.index + 1 < this.pics.length) {
      history.replaceState(null, null, `/pics/${this.pics[this.index + 1].id}`);
      this.render({
        pics: this.pics,
        index: this.index + 1,
      });
    }
  },
  prevPic() {
    if (this.index - 1 >= 0) {
      history.replaceState(null, null, `/pics/${this.pics[this.index - 1].id}`);
      this.render({
        pics: this.pics,
        index: this.index - 1,
      });
    }
  },
  render({ pics, picid, index, hidden = true }) {
    Modal.tearDown();
    this.pics = pics;
    this.index = index;
    this.hidden = hidden;

    if (typeof index === 'undefined') {
      this.index = pics.indexOf(pics.find(pic => pic.id === picid));
    }

    const modalContent = document.createElement('div');
    modalContent.id = 'pics-slideshow';
    modalContent.classList.add('pics-slideshow');
    modalContent.style = `background-image: url(${pics[this.index].ssUrl});background-repeat:no-repeat;background-position: center;`;

    const contentWrapper = document.createElement('div');
    contentWrapper.id = 'content-wrapper';
    contentWrapper.classList.add('content-wrapper');
    contentWrapper.addEventListener('mouseleave', () => {
      contentWrapper.classList.add('hide');
    });
    contentWrapper.addEventListener('mouseenter', () => {
      contentWrapper.classList.remove('hide');
    });
    contentWrapper.appendChild(document.createTextNode('Hello!'));
    if (this.hidden) {
      contentWrapper.classList.add('hide');
    }


    modalContent.appendChild(contentWrapper);
    Modal.render({ child: modalContent, url: '/pics' });
  },
};
export default PicsSlideshow;
