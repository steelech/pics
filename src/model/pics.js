const splitUpFiles = (files, numChunks) => {
  const fileList = [];
  for (let i = 0; i < numChunks; i += 1) {
    fileList.push(files.slice(i * 30, i * 30 + 30));
  }
  return fileList;
};

const sendPicsChunk = (files, albumid) =>
  new Promise((resolve) => {
    const formData = new FormData();
    files.map(file => formData.append(file.name, file));
    formData.append('_id', albumid);
    debugger
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8888/pics', true);
    xhr.send(formData);

    xhr.onload = () => {
      resolve();
    };
  });

const sendAllPics = (fileList, albumid) =>
  new Promise((resolve) => {
    const sendPics = (fileList) => {
      if (fileList.length) {
        sendPicsChunk(fileList.pop(), albumid).then(() => sendPics(fileList, albumid));
      } else {
        resolve();
      }
    };
    sendPics(fileList);
  });

const Pics = {
  get() {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://localhost:8888/pics', true);
      xhr.send();
      xhr.onload = function () {
        resolve(JSON.parse(this.response));
      };
    });
  },
  getByAlbum(albumid) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `http://localhost:8888/albums/${albumid}`, true);
      xhr.send();
      xhr.onload = function () {
        resolve(JSON.parse(this.response));
      };
    });
  },
  send(files, albumid) {
    return new Promise((resolve) => {
      // need to split up files to avoid browser timeout
      const numChunks = Math.ceil(files.length / 30);
      const fileList = splitUpFiles(files, numChunks);

      sendAllPics(fileList, albumid).then(resolve);
    });
  },
};
export default Pics;
