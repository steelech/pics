const Thumbnail = {
  render({ pic, container }) {
    const wrapper = document.createElement('div');
    wrapper.id = 'thumbnail-wrapper';
    wrapper.classList.add('thumbnail-wrapper');
    const img = document.createElement('img');
    img.src = pic.thmbUrl;
    img.id = 'thumbnail';
    img.classList.add('thumbnail');
    img.alt = 'Still processing';
    wrapper.appendChild(img);
    container.appendChild(wrapper);
  },
};

export default Thumbnail;
