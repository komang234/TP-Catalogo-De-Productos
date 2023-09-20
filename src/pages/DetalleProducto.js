import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Productos from './components/Productos';
import DetalleProducto from './components/DetalleProducto';
import productos from './data/productos'; // Importa los datos de productos

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productos" exact component={Productos} />
        <Route
          path="/producto/:id"
          render={({ match }) => {
            const productId = parseInt(match.params.id);
            const producto = productos.find((p) => p.id === productId);
            return <DetalleProducto producto={producto} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;