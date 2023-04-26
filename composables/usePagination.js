const itemsPerPage = 15;

export const totalPages = (items, itemsPerPage) => {
  return Math.ceil(items / itemsPerPage);
};

export const getPageItems = (items, page, itemsPerPage) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};
