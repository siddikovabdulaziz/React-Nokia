import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Enter from './router/Enter/Enter.js';



function App() {
  return (
    <div className="App">
      <Navbar />

      <p className='p'>Enterprisega oting  yoki bosing</p>

      <Routes>

        <Route path='Enter' element={<Enter />} />

      </Routes>

      



    </div>
  );
}

export default App;
