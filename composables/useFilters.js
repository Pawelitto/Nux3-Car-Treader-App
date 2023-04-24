export const byLikes = (cars, likes) => {
  const likedCarIds = likes.map((car) => car.id);
  return cars.filter((car) => likedCarIds.includes(car.id));
};

export const byFilters = (cars, filter) => {
  if (filter === 'lowest') {
    return cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (filter === 'highest') {
    return cars.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (filter === 'set') {
    return cars;
  }
};

export const byMake = (cars, filter) => {
  if (filter === 'All') {
    return cars;
  }
  return cars.filter((car) => car.make === filter);
};
