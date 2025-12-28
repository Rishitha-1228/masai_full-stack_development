import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";
import { useState } from "react";

const Admin = () => {
  const [fleet, setFleet] = useState([]);

  const addFleet = (data) => {
    setFleet([...fleet, data]);
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar addFleet={addFleet} />
        <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {fleet.map((item) => (
            <FleetCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
