
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Home from './Components/Home';
import Contact from './Components/Contact';
import {Routes,Route} from 'react-router-dom';
import Footer from './Components/Footer';


function App() {
  return (
   <>
   <div>
     <Navbar/>
   </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about/' element={<About/>}/>
      <Route path='/services/' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<Home/>}/>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;
