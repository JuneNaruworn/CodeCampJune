import React, { useSteate } from 'react';
import './App.css';
import PrivateRoutes from './components/private-routes/PrivateRoutes';




function App() {
  const [role,setRole] = useSteate ("guest");
  return (
    <div lassName="App">
      <PrivateRoutes role={role} setRole={setRole}/>
    </div>
  );
}

export default App;
