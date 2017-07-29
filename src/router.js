import login from 'layout/login';
import View404 from 'layout/404';
import base from 'layout/base';
import urlParse from 'utils/urlParse';
import Session from 'model/session';

const picsRouteObject = (pathArray) => {
  const picsObject = {};
  picsObject.pics = true;
  if (pathArray[1]) {
    if (pathArray[1] === 'albums') {
      picsObject.albums = true;
      if (pathArray[2]) {
        picsObject.albumid = pathArray[2];
      }
    } else {
      picsObject.picid = pathArray[1];
    }
  }
  return picsObject;
};

const songsRouteObject = (pathArray) => {
  const songsObject = {};
  songsObject.songs = true;
  return songsObject;
};

// clean this fucker up ASAP, this is ridiculous
const pathObject = (path) => {
  const pathArray = path.split('/').filter(val => val !== '');

  if (pathArray.length === 0) {
    return {};
  }
  let pathParams = {};
  if (pathArray[0] === 'login') {
    pathParams.login = true;
  } else if (pathArray[0] === 'pics') {
    pathParams = picsRouteObject(pathArray);
  } else if (pathArray[0] === 'songs') {
    pathParams = songsRouteObject(pathArray);
  }
  return pathParams;
};

const routeRegex = (url) => {
  const routes = [
    '^$',
    '^/login$', // only unprotected view
    '^/pics$',
    '^/songs$',
    '^/pics/albums$',
    '^/pics/([1-9])([0-9]+)?$',
    '^/songs/([1-9])([0-9]+)?$',
    '^/pics/albums/([1-9])([0-9]+)?$',
  ];
  let match = false;
  for (const key in routes) {
    if (url.match(routes[key])) {
      match = true;
      break;
    }
  }
  const pathParams = pathObject(url);
  if (!match) {
    View404.render();
  } else {
    Session.validate()
      .then(() => {
        if (pathParams.login) {
          history.replaceState(null, null, '/');
        }
        base.render(pathParams);
      })
      .catch(() => {
        if (!pathParams.login) {
          history.replaceState(null, null, '/login');
        }
        document.body.className = '';
        login.render();
      });
  }
};

const router = {
  route: (url, load) => {
    const parsedUrl = urlParse.removeTrailingBackslash(url);
    if (load) {
      document.addEventListener('DOMContentLoaded', () => {
        routeRegex(parsedUrl);
      });
    } else {
      routeRegex(parsedUrl);
    }
  },
};

export default router;
