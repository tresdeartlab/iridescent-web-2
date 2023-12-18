import React from 'react';
import ItemList from '../Components/ItemList/ItemList';
import '../Pages/Pages.css'
import Carousel from '../Components/Carousel/Carousel';

const Home = () => {
  return (
    <div className="page-container">
      <Carousel />
      <h3 className="tittle-page">Encuentra lo que estás buscando</h3>
      <ItemList />
    </div>
  );
};

export default Home;