export function sanitizarTexto(texto) {
  const mapa = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    "/": '&#x2F;',
  };
  return texto.replace(/[&<>"'/]/g, (match) => mapa[match]);
}
