export default function Cliente({ id, productos }) {
  return (
    <div>
      Cliente {id} con {productos.length} productos
    </div>
  );
}