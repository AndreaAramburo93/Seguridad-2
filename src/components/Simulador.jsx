import { useState } from "react";
import { Cajera } from "../models/Cajera.model.js";
import { Cliente } from "../models/Cliente.model.js";
import { Producto } from "../models/Producto.model.js";
const Simulador = ({ onSimulacionCompleta }) => {
  const [numClientes, setNumClientes] = useState(3);
  const [numProductos, setNumProductos] = useState(3);

  const generarSimulacion = () => {
    const nuevasCajeras = [new Cajera("Cajera 1"), new Cajera("Cajera 2")];

    for (let i = 1; i <= numClientes; i++) {
      const productos = [];
      for (let j = 1; j <= numProductos; j++) {
        const precio = Math.random() * 10000 + 1;
        const tiempo = Math.floor(Math.random() * 10) + 1;
        productos.push(new Producto(`Producto ${j}`, precio, tiempo));
      }
      const cliente = new Cliente(`Cliente ${i}`, productos);

      const cajeraIndex =
        nuevasCajeras[0].tiempoAcumulado <= nuevasCajeras[1].tiempoAcumulado
          ? 0
          : 1;
      nuevasCajeras[cajeraIndex].procesarCliente(cliente);
    }

    onSimulacionCompleta(nuevasCajeras);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        Configuración de la Simulación
      </h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block font-semibold mb-2">Número de Clientes</label>
          <input
            type="number"
            min="1"
            max="10"
            value={numClientes}
            onChange={(e) => setNumClientes(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">
            Productos por Cliente
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={numProductos}
            onChange={(e) => setNumProductos(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <button
        onClick={generarSimulacion}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Generar Simulación
      </button>
    </div>
  );
};

export default Simulador;
