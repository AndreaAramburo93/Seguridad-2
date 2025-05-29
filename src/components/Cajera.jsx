import Cliente from "./Cliente";

const Cajera = ({ cajera }) => {
  return (
    <div className="bg-green-50 p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-bold mb-3">{cajera.nombre}</h2>
      <p className="font-semibold mb-2">
        Tiempo total acumulado: {cajera.tiempoAcumulado} s
      </p>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Clientes atendidos:</h3>
        {cajera.clientesAtendidos.map((cliente, index) => (
          <Cliente key={index} cliente={cliente} />
        ))}
      </div>
    </div>
  );
};

export default Cajera;