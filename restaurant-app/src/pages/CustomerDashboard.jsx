import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";

const CustomerDashboard = () => {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div style={{ padding: 20 }}>
      <h3>Customer Dashboard</h3>
      {restaurants.map(r => (
        <RestaurantCard key={r.restaurantID} data={r} />
      ))}
    </div>
  );
};

export default CustomerDashboard;
