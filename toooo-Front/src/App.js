import React ,{ useState } from 'react';
import './App.css';
import PrivateRoutes from './components/private-routes/PrivateRoutes';




function App() {
  const [role,setRole] = useState ("guest");
  return (
    <div lassName="App">
      <PrivateRoutes role={role} setRole={setRole}/>
    </div>
  );
}

export default App;
