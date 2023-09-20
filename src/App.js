import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Productos from './components/Productos';
import DetalleProducto from './components/DetalleProducto';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productos" exact component={Productos} />
        <Route path="/producto/:id" component={DetalleProducto} />
      </Switch>
    </Router>
  );
}

export default App;