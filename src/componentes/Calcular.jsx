
import './calcular.css'

export default function Calcular({verificaEntradas, limpiar}) {
  return (
    <section className="calcular">
      <button onClick={verificaEntradas}>Calcular</button>
      <button onClick={limpiar}>Limpiar</button>
    </section>
  );
}

