import logo from './logo.svg';
import './App.css';

import Home from './pages/home/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
        <Home/>
      <Footer/>
    </div>
  );
}

export default App;
