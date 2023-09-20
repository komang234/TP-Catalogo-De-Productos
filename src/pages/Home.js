import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  // Obtén imágenes aleatorias para el carrusel
  const imagenesMostradas = [];
  while (imagenesMostradas.length < 3) {
    const imagenAleatoria =
      imagenesCarrusel[Math.floor(Math.random() * imagenesCarrusel.length)];
    if (!imagenesMostradas.some((imagen) => imagen.id === imagenAleatoria.id)) {
      imagenesMostradas.push(imagenAleatoria);
    }
  }

  return (
    <div>
      <h1>Carrusel de Imágenes Aleatorias</h1>
      <Carousel>
        {imagenesMostradas.map((imagen) => (
          <div key={imagen.id}>
            <img src={imagen.url} alt={`Imagen ${imagen.id}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;