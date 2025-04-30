import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { Carrusel } from './Carrusel/Carrusel';
import { Card } from './Card/Card';

function App() {
  return (
    <div >
       <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carrusel' element={<Carrusel/>}/>
        <Route path='/card' element={<Card/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
