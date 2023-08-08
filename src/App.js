import {Link, Routes, Route } from 'react-router-dom'
import Home from './pages/home.js';
import './css/styles.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
