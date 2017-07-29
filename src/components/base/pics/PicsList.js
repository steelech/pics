const PicsList = {
  render({ pics }) {
    console.log('rendering pics List: ', pics);

    const picsListContainer = document.createElement('div');
    picsListContainer.classList.add('pics-list');
    picsListContainer.id = 'pics-list';
    picsListContainer.appendChild(document.createTextNode('Pics List'));

    pics.map((pic) => {
      let thisPic = document.createElement('img');
      thisPic.src = pic.url;
      thisPic.height = 100;
      thisPic.width = 100;
      picsListContainer.appendChild(thisPic);
    })
    document.getElementById('pics-content').appendChild(picsListContainer);
  },
};

export default PicsList;
