const picsView = {
  render() {
    const header = document.createElement('h1');
    const headerText = document.createTextNode('Pics');
    header.appendChild(headerText);
    document.body.appendChild(header);
    document.body.className = 'pics-background';
  },
};

export default picsView;
