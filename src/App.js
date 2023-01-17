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
          <Route path='/' exact element={<Main />} />
          <Route path='/photos' exact element={<Photos />} />
          <Route path='/about' exact element={<About />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
