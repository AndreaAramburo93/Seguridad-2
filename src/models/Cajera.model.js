export class Cajera {
  constructor(nombre) {
    this.nombre = nombre;
    this.tiempoAcumulado = 0;
    this.clientesAtendidos = [];
  }

  procesarCliente(cliente) {
    this.clientesAtendidos.push(cliente);
    this.tiempoAcumulado += cliente.tiempoTotal;
  }

  reiniciar() {
    this.tiempoAcumulado = 0;
    this.clientesAtendidos = [];
  }
}