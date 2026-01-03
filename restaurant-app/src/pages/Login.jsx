import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // simple role logic (Masai style)
    if (email.includes("admin")) {
      navigate("/admin/dashboard");
    } else {
      navigate("/customers/dashboard");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f3f4f6"
    }}>
      <div style={{
        border: "1px solid #ccc",
        padding: 20,
        width: 300,
        background: "white"
      }}>
        <h3>Welcome to Restaurant Management App</h3>
        <p>Login</p>

        <input
          type="email"
          placeholder="customer@gmail.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 10 }}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
