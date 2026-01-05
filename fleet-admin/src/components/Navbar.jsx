function Navbar({ logout }) {
  return (
    <nav>
      <h1>Fleet Management</h1>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;