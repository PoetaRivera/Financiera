import "./datos.css";
import { subtitulos } from "../variables/variables.js";

export default function Datos({
  valor1,
  valor2,
  valor3,
  valor4,
  valor5,
  datos,
  setDatos,
  deshabilitado,
}) {
 // setDatos(datos);

  function manejaDatos(e) {
    let mivalor=''
    e.target.value === 'R' ? mivalor = 'I' : mivalor = e.target.value;
    setDatos({ ...datos, [mivalor]: e.target.checked });
   
  }

  return (
    <section className="datos">
      <h3 className="datos-subtitulo">{subtitulos[2]}</h3>
      <aside className="datos-input">
        <article>
          <input
            disabled={deshabilitado}
            type="checkbox"
            name="dato1"
            onChange={manejaDatos}
            value={valor1}
            checked={datos.I}
          />
          {valor1}
        </article>
        <article>
          <input
            disabled={deshabilitado}
            type="checkbox"
            name="dato2"
            onChange={manejaDatos}
            value={valor2}
            checked={datos.Vf}
          />
          {valor2}
        </article>
        <article>
          <input
            disabled={deshabilitado}
            type="checkbox"
            name="dato3"
            onChange={manejaDatos}
            value={valor3}
            checked={datos.Va}
          />
          {valor3}
        </article>
        <article>
          <input
            disabled={deshabilitado}
            type="checkbox"
            name="dato4"
            onChange={manejaDatos}
            value={valor4}
            checked={datos.i}
          />
          {valor4}
        </article>
        <article>
          <input
            disabled={deshabilitado}
            type="checkbox"
            name="dato5"
            onChange={manejaDatos}
            value={valor5}
            checked={datos.n}
          />
          {valor5}
        </article>
      </aside>
    </section>
  );
}
