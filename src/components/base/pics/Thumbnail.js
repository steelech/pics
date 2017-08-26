const Thumbnail = {
  render({ pic, container }) {
    console.log('rendering pics thumbnail');
    const wrapper = document.createElement('div');
    wrapper.id = 'thumbnail-wrapper';
    wrapper.classList.add('thumbnail-wrapper');
    const img = document.createElement('img');
    img.src = pic.thmbUrl;
    img.id = 'thumbnail';
    img.classList.add('thumbnail');
    wrapper.appendChild(img);
    container.appendChild(wrapper);
  },
};

export default Thumbnail;
