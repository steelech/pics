const View404 = {
  render() {
    const header = document.createElement('h1');
    const headerText = document.createTextNode('404: Not Found');
    header.appendChild(headerText);

    document.getElementsByTagName('body')[0].appendChild(header);
  },
};

export default View404;
