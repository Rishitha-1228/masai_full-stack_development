import { useContext, useState } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

const AddRestaurant = () => {
  const { addRestaurant } = useContext(RestaurantContext);

  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "",
    parkingLot: false,
    image: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.restaurantName || !form.address) {
      alert("Form cannot be empty");
      return;
    }

    addRestaurant({
      ...form,
      restaurantID: Date.now()
    });

    alert("Restaurant added successfully");
    setForm({ restaurantName: "", address: "", type: "", parkingLot: false, image: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setForm({...form, restaurantName:e.target.value})} />
      <input placeholder="Address" onChange={e => setForm({...form, address:e.target.value})} />
      <select onChange={e => setForm({...form, type:e.target.value})}>
        <option value="">Select Type</option>
        <option value="Rajasthani">Rajasthani</option>
        <option value="Gujarati">Gujarati</option>
        <option value="South Indian">South Indian</option>
      </select>
      <button>Add</button>
    </form>
  );
};

export default AddRestaurant;
