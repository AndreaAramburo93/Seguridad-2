export default function Producto({ nombre, precio, tiempo }) {
  return (
    <div>
      {nombre} - ${precio} - {tiempo}s
    </div>
  );
}
