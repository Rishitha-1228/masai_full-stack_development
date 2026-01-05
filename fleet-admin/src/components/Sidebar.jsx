import { useState } from 'react';

function Sidebar({ addFleet }) {
  const [form, setForm] = useState({ regNo: '', category: '', driver: '', status: 'Available' });

  const handleSubmit = () => {
    if (!form.regNo || !form.category || !form.driver) {
      alert('All fields are required');
      return;
    }
    addFleet(form);
    setForm({ regNo: '', category: '', driver: '', status: 'Available' });
  };

  return (
    <div>
      <input value={form.regNo} onChange={(e) => setForm({ ...form, regNo: e.target.value })} placeholder="Vehicle Reg No" />
      <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
        <option value="">Select Category</option>
        <option value="Auto">Auto</option>
        <option value="Car">Car</option>
        <option value="Truck">Truck</option>
        <option value="Bus">Bus</option>
      </select>
      <input value={form.driver} onChange={(e) => setForm({ ...form, driver: e.target.value })} placeholder="Driver Name" />
      <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
        <option value="Available">Available</option>
        <option value="Unavailable">Unavailable</option>
      </select>
      <button onClick={handleSubmit}>Add Fleet</button>
    </div>
  );
}

export default Sidebar;