import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Shop from './Pages/Shop';
import ItemList from './Components/ItemList/ItemList';
import './App.css';

const App = () => {

  const [totalItems, setTotalItems] = useState(0);

  const handleAddToCart = (count) => {
    setTotalItems(totalItems + count);
  };

  return (
    <Router>
      <div>
        <NavBar />
            <div >
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route
                  path="/shop/*"
                  element={
                    <div>
                      <Shop />
                    </div>
                  }
                />
                <Route path="/:categoria" element={<ItemList />} />
              </Routes>
            </div>
        </div>
      </Router>
  );
};

export default App;

