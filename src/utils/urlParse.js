const urlParse = {
  removeTrailingBackslash(url) {
    return url.endsWith('/') ? url.substring(0, url.length - 1) : url;
  },
  breakUpPath(url) {
    // get the first part of the path, return an object
    // w/ the first part and then the second part as separate
    // strings
    const pathArray = url.split('/');
    pathArray.splice(0, 1);
    const obj = {
      first: pathArray.splice(0, 1)[0],
      rest: pathArray.join('/'),
    };
    return obj;
  },
};

export default urlParse;
