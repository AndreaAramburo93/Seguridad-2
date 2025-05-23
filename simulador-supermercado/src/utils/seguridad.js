export function sanitizarEntrada(entrada) {
  const mapa = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  return entrada.replace(/[<>&"'/]/g, (match) => mapa[match]);
}