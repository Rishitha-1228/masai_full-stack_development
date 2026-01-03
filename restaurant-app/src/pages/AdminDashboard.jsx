import { useContext, useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import RestaurantCard from "../components/RestaurantCard";
import SearchFilter from "../components/SearchFilter";

const AdminDashboard = () => {
  const { restaurants, addRestaurant } = useContext(RestaurantContext);
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    addRestaurant({
      restaurantID: Date.now(),
      restaurantName: "Krishna Bhavan",
      address: "Mysore Road, Bangalore",
      type: "South Indian",
      parkingLot: true,
      image: "https://via.placeholder.com/250"
    });
  };

  return (
    <div className="container">
      {/* LEFT */}
      <div className="left">
        <h3>Add Restaurant</h3>
        <input placeholder="Restaurant Name" />
        <input placeholder="Address" />
        <select><option>Rajasthani</option></select>
        <select><option>Parking Yes</option></select>
        <button onClick={handleAdd}>Add Restaurant</button>
      </div>

      {/* RIGHT */}
      <div className="right">
        <h3>Admin Dashboard</h3>
        <SearchFilter setSearch={setSearch} />
        {restaurants
          .filter(r => r.restaurantName.toLowerCase().includes(search.toLowerCase()))
          .map(r => <RestaurantCard key={r.restaurantID} data={r} />)}
      </div>
    </div>
  );
};

export default AdminDashboard;
