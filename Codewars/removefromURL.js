function removeUrlAnchor(url) {
  let hash = "#";

  let index = url.indexOf(hash);

  if (index === -1) {
    index = url.length + 1;
  }

  return url.slice(0, index);
}
