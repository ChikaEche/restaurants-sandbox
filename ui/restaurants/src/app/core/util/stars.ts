export const getStars = (rating: number): Array<number> => {
  let stars = [
    ...new Array(Math.floor(rating)).fill(1),
    ...new Array(Math.round(rating) - Math.floor(rating)).fill(0.5)
  ];
  stars = [...stars, ...new Array(Math.floor(5 - stars.length)).fill(0)];
  return stars;
};
