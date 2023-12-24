import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/home/Home';

import Admin from './pages/admin/admin';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin/>} />
    
      </Routes>
     </BrowserRouter>
     
      
    </div>
  );
}

export default App;
