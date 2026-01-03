import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{
      display: "flex",
      gap: 20,
      padding: 15,
      background: "#1f2937",
      color: "white"
    }}>
      <Link to="/" style={{color:"white"}}>Home</Link>
      <Link to="/admin/dashboard" style={{color:"white"}}>Admin</Link>
      <Link to="/customers/dashboard" style={{color:"white"}}>Customer</Link>
    </div>
  );
};

export default Navbar;
