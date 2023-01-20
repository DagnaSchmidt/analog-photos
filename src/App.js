import { Routes, BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Photos from "./Components/Photos";
import About from "./Components/About";
import './Styles/app.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="app">
      <BrowserRouter>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Routes>
          <Route path='/' exact element={<Main isOpen={isOpen} setIsOpen={setIsOpen} />} />
          <Route path='/photos' exact element={<Photos setIsOpen={setIsOpen} />} />
          <Route path='/about' exact element={<About setIsOpen={setIsOpen} />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
