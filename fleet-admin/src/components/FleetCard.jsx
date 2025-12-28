const FleetCard = ({ data }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <p><b>Vehicle:</b> {data.reg}</p>
      <p><b>Driver:</b> {data.driver}</p>
    </div>
  );
};

export default FleetCard;
