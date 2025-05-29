const Producto = ({ producto }) => {
  return (
    <div className="bg-white p-2 rounded shadow mb-2">
      <p className="font-semibold">{producto.nombre}</p>
      <p>Precio: ${producto.precio.toFixed(3)}</p>
      <p>Tiempo: {producto.tiempoProcesamiento}s</p>
    </div>
  );
};

export default Producto;