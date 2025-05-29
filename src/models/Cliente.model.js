

export class Cliente {
  constructor(nombre, productos = []) {
    this.nombre = nombre;
    this.productos = productos;
    this.tiempoTotal = 0;
    this.calcularTiempoTotal();
  }

  agregarProducto(producto) {
    this.productos.push(producto);
    this.calcularTiempoTotal();
  }

  calcularTiempoTotal() {
    this.tiempoTotal = this.productos.reduce(
      (total, producto) => total + producto.tiempoProcesamiento,
      0
    );
  }

  getTotalCompra() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
}