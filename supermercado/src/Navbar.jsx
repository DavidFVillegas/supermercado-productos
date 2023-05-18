const Navbar = ({ onClick }) => {
  return (
    <div className="navbar">
      <h1>Supermercado CESDE</h1>
      <div className="navbar-buttons">
        <button onClick={() => onClick('home')}>Home</button>
        <button onClick={() => onClick('productos')}>Lista de Productos</button>
      </div>
    </div>
  );
}

export default Navbar;

