const Api = {
  sendRequestToBackend: (data, endpoint, method) =>
    new Promise((resolve) => {
      const fullPath = `http://localhost:8888/${endpoint}`;
      const request = new XMLHttpRequest();
      request.open(method, fullPath, true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));

      request.addEventListener('load', (e) => {
        const responseStatus = e.target.status;
        const responseData = JSON.parse(e.target.response);

        const response = {
          responseStatus,
          responseData,
        };
        resolve(response);
      });
      request.addEventListener('error', e => console.log('error!', e));
    }),
};

export default Api;
