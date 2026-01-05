import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FleetCard from '../components/FleetCard';

function Admin({ fleets, addFleet, updateFleet, deleteFleet, logout }) {
  return (
    <div>
      <Navbar logout={logout} />
      <div style={{ display: 'flex' }}>
        <Sidebar addFleet={addFleet} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', flex: 1 }}>
          {fleets.map((fleet, index) => (
            <FleetCard
              key={index}
              fleet={fleet}
              index={index}
              updateFleet={updateFleet}
              deleteFleet={deleteFleet}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;