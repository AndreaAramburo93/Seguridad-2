import { useState } from "react";
import Simulador from "./components/Simulador";
import Resultados from "./components/Resultados";

function App() {
  const [cajeras, setCajeras] = useState([]);

  const handleSimulacionCompleta = (nuevasCajeras) => {
    setCajeras(nuevasCajeras);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          Simulación de Supermercado - IUDigital de Antioquia
        </h1>
      </header>
      <main className="max-w-6xl mx-auto">
        <Simulador onSimulacionCompleta={handleSimulacionCompleta} />
        <Resultados cajeras={cajeras} />
      </main>
      <footer className="mt-12 text-center text-gray-600">
        <p>Proyecto de simulación IUDigital de Antioquia</p>
      </footer>
    </div>
  );
}

export default App;