import Modal from 'components/ui/Modal';

const PicsSlideshow = {
  render({ pics, albumid, startingPic }) {
    console.log(`rendering PicsSlideshow w/ albumid = ${albumid} and startingPic = ${startingPic}`);
    const modalContent = document.createElement('div');
    modalContent.id = 'pics-slideshow';
    modalContent.classList.add('pics-slideshow');
    modalContent.appendChild(document.createTextNode('Pics Slideshow'));
    Modal.render(modalContent);
  },
};
export default PicsSlideshow;
