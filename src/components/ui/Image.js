const image = {

  render({ url, alt }) {
    // if we get a 403, that means 'expired'
    // hit endpoint, get new url.

    // if we get a 404, that means the image just isn't there
    // 'wait' until image is there, keep trying every few seconds (set limit)
    const wrapper = document.createElement('div');
    wrapper.id = 'image-wrapper';
    const img = new Image();
    img.src = url;
    img.id = 'thumbnail';
    img.classList.add('thumbnail');
    img.alt = alt;

    const header = new Headers({
      'Access-Control-Allow-Origin': '*'
    });

    const sentData = {
      mode: 'cors',
      header,
    };

    var numTries = 0;
    const maxTries = 5;
    // fetch(url, sentData).then((response) => {
    //   console.log('response: ', response);
    // })
    img.onerror = (e, status) => {
      console.log('ERROR LOADING IMAGE: ', e, status);
      if (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
      }
      wrapper.appendChild(document.createTextNode('wadup yo'));
      if (numTries < maxTries) {
        numTries += 1;
        setTimeout(() => {
          console.log('trying again!!');
          img.src = url;
        }, 3000);
      }
    };
    img.onload = (e, status) => {
      console.log('IMAGE LOADED!: ', e);
      console.log('status: ', status);
      if (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
      }
      wrapper.appendChild(img);
    };
    return wrapper;
  },
};

export default image;
