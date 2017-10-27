import Modal from 'components/ui/Modal';


const PicsSlideshow = {
  nextPic() {

  },
  prevPic() {

  },
  render({ pics, albumid, index, albumName }) {
    console.log('index: ', index)
    console.log('pic: ', pics[index]);
    console.log('pics: ', pics);
    const modalContent = document.createElement('div');
    modalContent.id = 'pics-slideshow';
    modalContent.classList.add('pics-slideshow');

    const leftArrow = document.createElement('i');
    leftArrow.classList.add('fa');
    leftArrow.classList.add('fa-arrow-left');
    modalContent.appendChild(leftArrow);

    const image = document.createElement('img');
    debugger
    image.src = pics[index].ssUrl;
    modalContent.appendChild(image);

    const rightArrow = document.createElement('i');
    rightArrow.classList.add('fa');
    rightArrow.classList.add('fa-arrow-right');
    modalContent.appendChild(rightArrow);

    const rightSection = document.createElement('div');
    rightSection.id = 'pics-slideshow-right';
    rightSection.classList.add('pics-slideshow-right');
    rightSection.appendChild(document.createTextNode('right section'));
    modalContent.appendChild(rightSection);


    Modal.render(modalContent);
  },
};
export default PicsSlideshow;
