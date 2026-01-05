import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [fleets, setFleets] = useState([]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const addFleet = (fleet) => setFleets([...fleets, fleet]);
  const updateFleet = (index, updatedFleet) => {
    const newFleets = [...fleets];
    newFleets[index] = updatedFleet;
    setFleets(newFleets);
  };
  const deleteFleet = (index) => setFleets(fleets.filter((_, i) => i !== index));

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/admin" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Admin fleets={fleets} addFleet={addFleet} updateFleet={updateFleet} deleteFleet={deleteFleet} logout={logout} />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;