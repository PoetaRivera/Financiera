import "./opcion.css";
import { subtitulos } from "../variables/variables.js";

export default function Opcion({
  opcion1,
  opcion2,
  opcion,
  setOpcion,
  deshabilitado,
  tipo,
}) {
  console.log(opcion1 + "  " + opcion);
  function manejaOpcion(e) {
    setOpcion(e.target.value);
  }

  //selecciona el subtitulo interes o anualidades
  let subtitulo = 0;
  if (tipo === 0) {
    subtitulo = 0;
  } else if (tipo === 1) {
    subtitulo = 3;
  }

  return (
    <section className="opcion">
      <h3 className="opcion-subtitulo">{subtitulos[subtitulo]}</h3>
      <article className="opcion-input">
        <input
          disabled={deshabilitado}
          id="radio1"
          type="radio"
          name="opcion1"
          value={opcion1}
          onChange={manejaOpcion}
          checked={opcion === opcion1}
        />
        <label htmlFor="radio1">{opcion1}</label>

        <input
          id="radio2"
          disabled={deshabilitado}
          type="radio"
          name="opcion2"
          value={opcion2}
          onChange={manejaOpcion}
          checked={opcion === opcion2}
        />
        <label htmlFor="radio2">{opcion2}</label>
      </article>
    </section>
  );
}
