import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === 'admin1234') {
      alert('Login success');
      login();
      navigate('/admin');
    } else {
      alert('Wrong email or password');
    }
  };

  return (
    <div>
      <input ref={emailRef} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;