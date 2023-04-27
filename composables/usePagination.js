export const totalPages = (items, itemsPerPage) => {
  return Math.ceil(items / itemsPerPage);
};

export const getPageItems = (items, page, itemsPerPage) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};

export const getDistance = (activePage, itemsPerPage) => {
  const to = activePage * itemsPerPage;
  const from = to - itemsPerPage + 1;
  //   console.log('Strona nr: ' + activePage + ' od ' + from + ' do ' + to);
  return { f: from, t: to };
};
