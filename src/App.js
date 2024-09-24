import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Order from './Components/Order';
import Hello from './Components/Hello';
import BillFrequency from './Components/BillFrequency';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/order" element={<Hello />} />
        <Route path="/frequency" element={<BillFrequency />} />
  
      </Routes>
    </div>
  );
}



export default App;
