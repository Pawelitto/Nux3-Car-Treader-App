<<<<<<< HEAD
=======
const itemsPerPage = 15;

>>>>>>> 94022913b46ad916255fe34e4266142386553d55
export const totalPages = (items, itemsPerPage) => {
  return Math.ceil(items / itemsPerPage);
};

export const getPageItems = (items, page, itemsPerPage) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};
<<<<<<< HEAD

export const getDistance = (activePage, itemsPerPage) => {
  const to = activePage * itemsPerPage;
  const from = to - itemsPerPage + 1;
  //   console.log('Strona nr: ' + activePage + ' od ' + from + ' do ' + to);
  return { f: from, t: to };
};
=======
>>>>>>> 94022913b46ad916255fe34e4266142386553d55
