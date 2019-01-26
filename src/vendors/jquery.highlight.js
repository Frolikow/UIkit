$.fn.highlight = function (pat) {
  function innerHighlight(node, pat) {
    let skip = 0;
    if (node.nodeType === 3) {
      const pos = node.data.toUpperCase().indexOf(pat);
      if (pos >= 0) {
        const spannode = document.createElement('span');
        spannode.className = 'highlight';
        const middlebit = node.splitText(pos);
        const endbit = middlebit.splitText(pat.length);
        const middleclone = middlebit.cloneNode(true);
        spannode.appendChild(middleclone);
        middlebit.parentNode.replaceChild(spannode, middlebit);
        skip = 1;
      }
    } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
      node.childNodes.forEach((el, index) => {
        index += innerHighlight(node.childNodes[index], pat);
      });
    }
    return skip;
  }
  return this.each(function () {
    innerHighlight(this, pat.toUpperCase());
  });
};

$.fn.removeHighlight = function () {
  return this.find('span.highlight').each(function () {
    const b = this.parentNode;
    b.replaceChild(this.firstChild, this);
    b.normalize();
  }).end();
};

$.fn.selectHighlight = function (number) {
  return this.find(`span.highlight:eq ${number})`).addClass('selectHighlight').end();
};
