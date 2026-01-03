import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { restaurants, updateRestaurant } = useContext(RestaurantContext);

  const restaurant = restaurants.find(r => r.restaurantID === Number(id));
  const [name, setName] = useState(restaurant.restaurantName);

  const handleUpdate = () => {
    updateRestaurant({ ...restaurant, restaurantName: name });
    alert("Updated");
    navigate("/admin/dashboard");
  };

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </>
  );
};

export default UpdateRestaurant;
