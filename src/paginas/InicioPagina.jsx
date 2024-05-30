import logo from "../imagenes/nuevologofinanciera.png";
import "./inicio.css";

export default function Inicio() {
  return (
    <section className="principal-inicio">
      <img className="logo-inicio" alt="logo de Financiera" src={logo} />
    </section>
  );
}
