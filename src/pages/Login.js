import React, { useState } from "react";
import { login } from "../api/fakeAuth";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    try {
      const { token } = login(username, password);
      localStorage.setItem("token", token);
      onLogin(token);
    } catch (err) {
      setError("Login fallido");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Iniciar sesión</h2>
      <input placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} className="border p-1 mb-2 block" />
      <input placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} className="border p-1 mb-2 block" />
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">Entrar</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
