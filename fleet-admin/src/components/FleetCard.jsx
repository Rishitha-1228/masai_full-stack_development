import { memo, useCallback } from 'react';

const FleetCard = memo(({ fleet, index, updateFleet, deleteFleet }) => {
  const updateDriver = useCallback(() => {
    const newDriver = prompt('Enter new driver name:');
    if (newDriver && newDriver.trim()) {
      updateFleet(index, { ...fleet, driver: newDriver.trim() });
    }
  }, [fleet, index, updateFleet]);

  const toggleStatus = useCallback(() => {
    updateFleet(index, { ...fleet, status: fleet.status === 'Available' ? 'Unavailable' : 'Available' });
  }, [fleet, index, updateFleet]);

  const handleDelete = useCallback(() => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      deleteFleet(index);
    }
  }, [index, deleteFleet]);

  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="Vehicle" />
      <p>Reg No: {fleet.regNo}</p>
      <p>Category: {fleet.category}</p>
      <p>Driver: {fleet.driver}</p>
      <p>Status: {fleet.status}</p>
      <button onClick={updateDriver}>Update Driver</button>
      <button onClick={toggleStatus}>Toggle Availability</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
});

export default FleetCard;