const header = new Headers({
  'Access-Control-Allow-Origin': '*'
});

const requestData = {
  mode: 'cors',
  header,
};

const image = {
  background({ url, pic }) {
    const wrapper = document.createElement('div');
    wrapper.id = 'background-image-wrapper';
    wrapper.classList.add('background-image-wrapper');

    let count = 0;
    const maxTries = 5;
    const getImage = () => {
      fetch(url)
        .then((res) => {
          if (res.status === 200) {
            return res.blob();
          }
          return Promise.reject({ status: res.status });
        })
        .then((blob) => {
          const objectURL = URL.createObjectURL(blob);
          wrapper.style = `background-image: url(${objectURL});background-repeat:no-repeat;background-position: center;`;
        })
        .catch(({ status }) => {
          if (status === 404) {
            if (count < maxTries) {
              count += 1;
              setTimeout(() => {
                getImage();
              }, 3000);
            }
          } else {
            const updateUrl = `http://localhost:8888/pics/${pic._id}`;

            const params = {
              method: 'put',
            };
            fetch(updateUrl, params)
              .then(res => {
                if (res.status === 200) {
                  res.json()
                    .then(body => {
                      wrapper.style = `background-image: url(${body.ssUrl});background-repeat:no-repeat;background-position: center;`;
                    });
                } else {
                  console.log('ERROR UPDATING URL');
                }
              })

          }
        });
    };
    getImage();
    return wrapper;
  },
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


    var numTries = 0;
    const maxTries = 5;
    img.onerror = (e, status) => {
      if (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
      }
      wrapper.appendChild(document.createTextNode('wadup yo'));
      if (numTries < maxTries) {
        numTries += 1;
        setTimeout(() => {
          img.src = url;
        }, 3000);
      }
    };
    img.onload = (e, status) => {
      if (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
      }
      wrapper.appendChild(img);
    };
    return wrapper;
  },
};

export default image;
