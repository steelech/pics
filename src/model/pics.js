const splitUpFiles = (files, numChunks) => {
  const fileList = [];
  for (let i = 0; i < numChunks; i++) {
    fileList.push(files.slice(i * 30, i * 30 + 30));
  }
  return fileList;
};

const sendPicsChunk = files =>
  new Promise((resolve, reject) => {
    const formData = new FormData();
    console.log('sending: ', files);
    files.map(file => formData.append(file.name, file));

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8888/pics', true);
    xhr.send(formData);

    xhr.onload = () => {
      resolve();
    };
  });

const sendAllPics = fileList =>
  new Promise((resolve, reject) => {
    var sendPics = fileList => {
      if (fileList.length) {
        sendPicsChunk(fileList.pop()).then(() => sendPics(fileList));
      } else {
        resolve();
      }
    };
    sendPics(fileList);
  });

export var Pics = {
  get() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://localhost:8888/pics', true);
      xhr.send();
      xhr.onload = function() {
        resolve(JSON.parse(this.response));
      };
    });
  },
  send(files) {
    console.log('all pics: ', files);
    return new Promise((resolve, reject) => {
      // need to split up files to avoid browser timeout
      const numChunks = Math.ceil(files.length / 30);
      const fileList = splitUpFiles(files, numChunks);

      sendAllPics(fileList).then(resolve);
    });
  },
};
