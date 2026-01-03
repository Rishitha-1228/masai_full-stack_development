export const getRestaurants = () =>
  JSON.parse(localStorage.getItem("restaurants")) || [];

export const saveRestaurants = (data) =>
  localStorage.setItem("restaurants", JSON.stringify(data));
