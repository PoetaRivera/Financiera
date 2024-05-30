import "./indicaciones.css";
import { definiciones } from "../variables/variables";

export default function Indicaciones({ miClase,tipo }) {
  const [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14] = definiciones;
 
  const clase = miClase;
 
  return (
    <div className={`definicion ${clase}`}>
      <section className="indicaciones">
        <span className="miTitulo">Indicaciones:</span>
        <span>{tipo === 0 ? t1 : t2}</span>
        <span>{t3}</span>
        <span>{t4}</span>
        <span>{t5}</span>
        <span>{t6}</span>
        <span>{t7}</span>
        <span>{t8}</span>
      </section>

      <section className="definiciones">
        <span className="miTitulo">Definiciones:</span>
        <span>{tipo === 0 ? t9 : t10}</span>
        <span>{t11}</span>
        <span>{t12}</span>
        <span>{t13}</span>
        <span>{t14}</span>
      </section>
    </div>
  );
}
