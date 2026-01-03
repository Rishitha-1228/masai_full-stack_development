const SearchFilter = ({ setSearch }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input placeholder="Search" onChange={e => setSearch(e.target.value)} />
      <select><option>All Types</option></select>
      <select><option>All Parking</option></select>
    </div>
  );
};

export default SearchFilter;
