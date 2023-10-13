import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import '../Home.css'; 
import { useContextState } from "../ContextState.js";

export default function Producto() {
  const { id } = useParams();
  const [producto, setProduct] = useState([]);
  const { contextState, setContextState } = useContextState();
  
  useEffect(() => {
    axios.get('https://dummyjson.com/products/' + id)
    .then((response)=> {
      setProduct(response.data);
    })
    .catch((error)=> {
      console.log(error);
    })}, [])

  if (producto) {
    return (
      <div className="product-details">
        <br></br><br></br><br></br><br></br><br></br>
        <img src={producto.img1} alt={producto.name} className="product-imageDetalles product-imagePreview" />
        <br></br><br></br><br></br><br></br><br></br>
        <div className="product-info ">
          <h1 className="product-name">{`Nombre: ${producto.name}`}</h1>
          <p className="product-description">{`Descripción: ${producto.descripcion}`}</p>
          <p className="product-category">{`Categoría: ${producto.categoria}`}</p>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        
      
      </div>
    );
  } else {
    return <div>Producto no encontrado</div>;
  }
}
