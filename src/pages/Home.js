import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
import productos from "../productos.json";
const Home = () => {
  return (
    <div className="home-container">
      <img style={{width: 150}} src="https://cdn.discordapp.com/attachments/1156707363022176387/1156772840339681310/9z_Team_allmode.png?ex=65163028&is=6514dea8&hm=d98da6e1dab8b58d90b0cd344fb2b6aff44c9d8e16b005cd4f735866d942f0b1&" alt="Descripción de la imagen" />
      <div className="Titulo">
        <br></br>
        <br></br>  
        <h1>👾 👾 Bienvenido a nuestra tienda en línea de muebles gamer 👾 👾</h1>
        <br></br><br></br>
      </div>
      <div className='Link'>
        <br></br>
        <Link to={`/Productos`}><button><h1>Explorar muebles</h1></button></Link>
        <br></br><br></br><br></br>
      </div>
      <Carousel className="product-carousel">
        {productos.slice(0, 3).map((product) => (
          <div className='fondocarrusel'>
            <div key={product.id} className="product-slide">
              <img src={product.img1} alt={product.name} className="product-image" />
            </div>
          </div>
        ))}
      </Carousel>
      <div className='Titulo'>
        <br></br>
        <h1>Muebles recomendados por nuestra comunidad</h1>
        <br></br>
      </div>
      <div className="product-list">
        {productos.map((product) => (
          <div key={product.id} className="product">
            <br></br><br></br><br></br>
            <img src={product.img1} alt={product.name} className="product-imagePreview" />
            <p className="product-name">{product.name}</p>
            <p className="product-price"><b>Precio: ${product.price}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
