import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
