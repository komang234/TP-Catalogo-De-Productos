import React, { useState } from 'react';
import productos from './productos';

const Productos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState(''); // Estado para el filtro de categoría
  const [busqueda, setBusqueda] = useState(''); // Estado para la búsqueda

  // Filtrar productos por categoría y búsqueda
  const productosFiltrados = productos.filter((producto) =>
    producto.categoria.toLowerCase().includes(filtroCategoria.toLowerCase()) &&
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>Productos</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Ropa">Ropa</option>
          {/* Agregar más categorías según tu lista */}
        </select>
      </div>
      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - {producto.categoria}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
