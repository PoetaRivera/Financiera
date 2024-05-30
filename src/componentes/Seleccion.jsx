
import './seleccion.css'

export default function Seleccion({obtenerCaso, deshabilitado}) {
  return (
    <section className="seleccion">
      <button onClick={obtenerCaso} disabled={deshabilitado}>
        Introducir datos
      </button>
    </section>
  );
}
