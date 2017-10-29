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
  render({ pics, picid, index }) {
    Modal.tearDown();
    this.pics = pics;
    this.index = index;

    if (typeof index === 'undefined') {
      this.index = pics.indexOf(pics.find(pic => pic.id === picid));
    }

    const modalContent = document.createElement('div');
    modalContent.id = 'pics-slideshow';
    modalContent.classList.add('pics-slideshow');

    const leftArrowWrapper = document.createElement('div');
    leftArrowWrapper.id = 'left-arrow-wrapper';
    leftArrowWrapper.classList.add('left-arrow-wrapper');
    const leftArrow = document.createElement('i');
    leftArrow.classList.add('fa');
    leftArrow.classList.add('fa-arrow-left');
    leftArrowWrapper.appendChild(leftArrow);
    modalContent.appendChild(leftArrowWrapper);
    leftArrow.addEventListener('click', () => this.prevPic());

    const imageWrapper = document.createElement('div');
    imageWrapper.id = 'image-wrapper';
    imageWrapper.classList.add('image-wrapper');
    const image = document.createElement('img');
    image.src = pics[this.index].ssUrl;
    imageWrapper.appendChild(image);
    modalContent.appendChild(imageWrapper);

    const rightArrowWrapper = document.createElement('div');
    rightArrowWrapper.id = 'right-arrow-wrapper';
    rightArrowWrapper.classList.add('right-arrow-wrapper');
    const rightArrow = document.createElement('i');
    rightArrow.classList.add('fa');
    rightArrow.classList.add('fa-arrow-right');
    rightArrow.addEventListener('click', () => this.nextPic());
    rightArrowWrapper.appendChild(rightArrow);
    modalContent.appendChild(rightArrowWrapper);

    const rightSectionWrapper = document.createElement('div');
    rightSectionWrapper.id = 'right-section-wrapper';
    rightSectionWrapper.classList.add('right-section-wrapper');
    const rightSection = document.createElement('div');
    rightSection.id = 'pics-slideshow-right';
    rightSection.classList.add('pics-slideshow-right');
    rightSection.appendChild(document.createTextNode('right section'));
    rightSectionWrapper.appendChild(rightSection);
    modalContent.appendChild(rightSectionWrapper);

    Modal.render({ child: modalContent, url: '/pics' });
  },
};
export default PicsSlideshow;
