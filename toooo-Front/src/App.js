import React ,{ useState } from 'react';
import './App.css';
import PrivateRoutes from './components/private-routes/PrivateRoutes';
import localStorageService from './services/localStorageService';



function App() {
  const [role,setRole] = useState (localStorageService.getRole());
  
  return (
    <div lassName="App">
      <PrivateRoutes role={role} setRole={setRole}/>
    </div>
  );
}

export default App;