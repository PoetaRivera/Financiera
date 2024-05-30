
import { NavLink } from "react-router-dom";
import "./baraNavegacion.css";


export default function BarraNavegacion({setTipo}) {
  
  let mitipo = 0;

  function asignarTipo(e) {
    if (e.target.name === "interes") {
      mitipo = 0;
      setTipo(mitipo);
    } else if (e.target.name === "anualidades") {
      mitipo = 1;
      setTipo(mitipo);
    }
  }

  return (
    <nav className="links">
      <NavLink className="link" to="/">
        Inicio
      </NavLink>

      <NavLink
        name="interes"
        onClick={asignarTipo}
        className="link"
        to="/Interes"
      >
        Interés
      </NavLink>

      <NavLink
        name="anualidades"
        onClick={asignarTipo}
         className="link"
        to="/Anualidades"
      >
        Anualidad
      </NavLink>

      <NavLink className="link" to="/Tasas">
        Tasas
      </NavLink>

      <NavLink className="link" to="/Descuento">
        Descuento
      </NavLink>
    </nav>
  );
}
