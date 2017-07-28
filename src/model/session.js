import Api from 'utils/api';

const Session = {
  login: (username, password) =>
    new Promise((resolve, reject) => {
      Api.sendRequestToBackend(
        {
          username,
          password,
        },
        'login',
        'POST',
      ).then(data => {
        console.log('data: ', data);
        resolve(data);
      });
    }),
  validate: () =>
    new Promise((resolve, reject) => {
      const creds = JSON.parse(localStorage.getItem('credentials'));
      if (creds) {
        Api.sendRequestToBackend(
          {
            username: creds.username,
            password: creds.password,
          },
          'session/validate',
          'POST',
        ).then(data => {
          if (data.responseStatus == 200) {
            resolve();
          } else {
            reject();
          }
        });
      } else {
        reject();
      }
    }),
};

export default Session;
