import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Producto from "./pages/Producto";
import Productos from "./pages/Productos";
import Layout from "./pages/Layout";
import Buscador from "./pages/Buscador";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Layout />}>
          <Route path="/Producto/:id" element={<Producto />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Buscador/:categoria" element={<Buscador />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}