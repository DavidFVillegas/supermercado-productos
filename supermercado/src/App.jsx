import React, { useState } from "react";
import Navbar from "./Navbar";
import Productos from "./Productos";
import data from "../data-json/productos.json";
import "./App.css";

const App = () => {
  const [productos, setProductos] = useState(data.productos);
  const [pagina, setPagina] = useState("home");

  const handleClick = (opcion) => {
    setPagina(opcion);
  };

  return (
    <div>
      <Navbar onClick={handleClick} />
      {pagina === "productos" && <Productos productos={productos} />}
    </div>
  );
};

export default App;
