import Producto from "./Producto";

const Cliente = ({ cliente }) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow mb-4">
      <h3 className="text-lg font-bold mb-2">{cliente.nombre}</h3>
      <p className="mb-2">
        <span className="font-semibold">Total compra:</span> ${cliente.getTotalCompra().toFixed(2)}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Tiempo proceso:</span> {cliente.tiempoTotal}s
      </p>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Productos:</h4>
        {cliente.productos.map((producto, index) => (
          <Producto key={index} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Cliente;