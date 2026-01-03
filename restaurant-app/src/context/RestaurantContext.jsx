import { createContext, useEffect, useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

  const addRestaurant = (data) => {
    const updated = [...restaurants, data];
    setRestaurants(updated);
    saveRestaurants(updated);
  };

  const deleteRestaurant = (id) => {
    const updated = restaurants.filter(r => r.restaurantID !== id);
    setRestaurants(updated);
    saveRestaurants(updated);
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant, deleteRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};
