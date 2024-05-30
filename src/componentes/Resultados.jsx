import './resultados.css'
export default function Resultados({ manejarEntrada, mostrar, texto, resultado }) {

  return (
    <section className="resultados">
      <article>
        {mostrar[0] ? (
          <input
            className="resultados-input"
            onBlur={manejarEntrada}
            type="number"
            step="0.0001"
            name="d1"
            placeholder={texto[0]}
          />
        ) : null}
      </article>
      <article>
        {mostrar[1] ? (
          <input
            className="resultados-input"
            onBlur={manejarEntrada}
            type="number"
            name="d2"
            placeholder={texto[1]}
          />
        ) : null}
      </article>
      <article>
        {mostrar[2] ? (
          <input
            className="resultados-input"
            onBlur={manejarEntrada}
            type="number"
            name="d3"
            placeholder={texto[2]}
          />
        ) : null}
      </article>
      <article>
        {mostrar[3] ? (
          <input
            className="resultados-input"
            readOnly
            type="text"
            name="d4"
            value={`${texto[3]} ${resultado}`}
          />
        ) : null}
      </article>
    </section>
  );
}
