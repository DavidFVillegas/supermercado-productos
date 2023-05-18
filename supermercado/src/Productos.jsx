const Productos = ({ productos }) => {
  return (
    <div className="productos-list">
      {productos.map(producto => (
        <div className="producto-card" key={producto.id}>
          <img src={producto.url_imagen} alt={producto.nombre} />
          <h2>{producto.nombre}</h2>
          <p>{producto.precio}</p>
          <p>{producto.peso}</p>
          <p>{producto.categoria}</p>
          <p>{producto.características}</p>
        </div>
      ))}
    </div>
  );
}

export default Productos;
