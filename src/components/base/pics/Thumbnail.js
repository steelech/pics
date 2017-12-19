import Image from 'components/ui/Image';

const Thumbnail = {
  render({ pic, container, onClick }) {
    const wrapper = document.createElement('div');
    wrapper.id = 'thumbnail-wrapper';
    wrapper.classList.add('thumbnail-wrapper');
    wrapper.onclick = onClick;
    const img = Image.render({
      url: pic.thmbUrl,
      alt: 'Still processing',
    });
    wrapper.appendChild(img);
    container.appendChild(wrapper);
  },
};

export default Thumbnail;
