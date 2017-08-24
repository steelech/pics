const PicsList = {
  render({ pics }) {
    console.log('rendering pics List: ', pics);

    const picsListContainer = document.createElement('div');
    picsListContainer.classList.add('pics-list');
    picsListContainer.id = 'pics-list';

    pics.map((pic) => {
      let thisPic = document.createElement('img');
      thisPic.src = pic.thmbUrl;
      picsListContainer.appendChild(thisPic);
    })
    document.getElementById('pics-content').appendChild(picsListContainer);
  },
};

export default PicsList;
