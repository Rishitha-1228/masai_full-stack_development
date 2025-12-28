import { useState } from "react";

const Sidebar = ({ addFleet }) => {
  const [reg, setReg] = useState("");
  const [driver, setDriver] = useState("");

  const handleAdd = () => {
    if (!reg || !driver) return alert("Fill all fields");

    addFleet({
      id: Date.now(),
      reg,
      driver,
    });

    setReg("");
    setDriver("");
  };

  return (
    <div style={{ padding: "20px", width: "200px" }}>
      <input
        placeholder="Vehicle Reg"
        value={reg}
        onChange={(e) => setReg(e.target.value)}
      />
      <br /><br />
      <input
        placeholder="Driver Name"
        value={driver}
        onChange={(e) => setDriver(e.target.value)}
      />
      <br /><br />
      <button onClick={handleAdd}>Add Fleet</button>
    </div>
  );
};

export default Sidebar;
