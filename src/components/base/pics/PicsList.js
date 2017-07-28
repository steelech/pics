const PicsList = {
  render(pics) {
    console.log('rendering pics List: ', pics);
    const picsListContainer = document.createElement('div');
    picsListContainer.classList.add('pics-list');
    picsListContainer.id = 'pics-list';
    picsListContainer.appendChild(document.createTextNode('Pics List'));
    document.getElementById('pics-content').appendChild(picsListContainer);
  },
};

export default PicsList;
