import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

const RestaurantCard = ({ data }) => {
  const { deleteRestaurant } = useContext(RestaurantContext);

  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h4>{data.restaurantName}</h4>
      <p>{data.address}</p>
      <p>{data.type}</p>
      <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>
      <button>Update</button>
      <button onClick={() => deleteRestaurant(data.restaurantID)}>Delete</button>
    </div>
  );
};

export default RestaurantCard;
