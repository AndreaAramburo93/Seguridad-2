import React, { useState } from "react";

const clientesIniciales = [
  {
    id: 1,
    productos: [
      { nombre: "Leche", precio: 3000, tiempo: 2 },
      { nombre: "Pan", precio: 1500, tiempo: 1 },
    ],
  },
  {
    id: 2,
    productos: [{ nombre: "Carne", precio: 12000, tiempo: 3 }],
  },
  {
    id: 3,
    productos: [
      { nombre: "Arroz", precio: 2500, tiempo: 2 },
      { nombre: "Huevos", precio: 5000, tiempo: 1 },
    ],
  },
  {
    id: 4,
    productos: [{ nombre: "Jugo", precio: 3000, tiempo: 2 }],
  },
];

function App() {
  const [clientes] = useState(clientesIniciales);
  const [numCajas, setNumCajas] = useState(2);
  const [procesando, setProcesando] = useState(false);
  const [log, setLog] = useState([]);

  const dividirClientes = (clientes, numCajas) => {
    const result = Array.from({ length: numCajas }, () => []);
    clientes.forEach((cliente, index) => {
      result[index % numCajas].push(cliente);
    });
    return result;
  };

  const procesarCaja = async (cajaId, clientesCaja) => {
    let logCaja = [];
    for (const cliente of clientesCaja) {
      let tiempo = 0;
      for (const producto of cliente.productos) {
        await new Promise((res) => setTimeout(res, producto.tiempo * 1000));
        tiempo += producto.tiempo;
      }
      logCaja.push(`Caja ${cajaId} procesó al cliente ${cliente.id} en ${tiempo}s`);
    }
    return logCaja;
  };

  const iniciarProcesamiento = async () => {
    setProcesando(true);
    setLog([]);

    const cajasClientes = dividirClientes(clientes, numCajas);

    const resultados = await Promise.all(
      cajasClientes.map((clientesCaja, idx) => procesarCaja(idx + 1, clientesCaja))
    );

    setLog(resultados.flat());
    setProcesando(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Simulador de Cajas Concurrentes 🛒</h1>

      <label className="block mb-2">
        Número de cajas abiertas:
        <input
          type="number"
          min="1"
          max={clientes.length}
          value={numCajas}
          onChange={(e) => setNumCajas(Number(e.target.value))}
          className="ml-2 p-1 border rounded w-16"
        />
      </label>

      <button
        onClick={iniciarProcesamiento}
        disabled={procesando}
        className="bg-green-600 text-white p-2 rounded mb-4"
      >
        {procesando ? "Procesando..." : "Iniciar Procesamiento"}
      </button>

      <div>
        <h2 className="font-bold mb-2">Log de procesamiento:</h2>
        <ul className="list-disc pl-5">
          {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
