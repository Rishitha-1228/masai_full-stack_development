function MessageCard({ title, message }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
