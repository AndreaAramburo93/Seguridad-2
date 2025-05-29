import Cajera from "./Cajera";

const Resultados = ({ cajeras }) => {
  if (!cajeras || cajeras.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Resultados de la Simulación</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cajeras.map((cajera, index) => (
          <Cajera key={index} cajera={cajera} />
        ))}
      </div>
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Resumen General</h3>
        <p>
          <span className="font-semibold">Tiempo total de simulación:</span>{" "}
          {Math.max(...cajeras.map((caja) => caja.tiempoAcumulado))} segundos
        </p>
        <p>
          <span className="font-semibold">Clientes totales atendidos:</span>{" "}
          {cajeras.reduce((total, caja) => total + caja.clientesAtendidos.length, 0)}
        </p>
      </div>
    </div>
  );
};

export default Resultados;
