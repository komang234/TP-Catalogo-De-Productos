import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; 
import axios from 'axios'

const Productos = () => {
  const [productos, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then((response)=> {
      setProducts(response.data.products);
    })
    .catch((error)=> {
      console.log(error);
    })}, [])

  return (
    <div className="home-container">
      <div className='TituloProducto'>
        <br></br>
        <h1>Nuestra selección de muebles</h1>
        <br></br>
      </div>
      <div className="product-list">
        {productos.map((product) => (
          <div key={product.id} className="product">
            <img src={product.img1} alt={product.name} className="product-image" />
            <br></br><br></br>
            <div className='Link'>
              <Link to={`/Producto/${product.id}`}>
                <button><p className="product-name">{product.name}</p></button>
              </Link>
            </div>
            <p className="product-price">Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
