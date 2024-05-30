import { operaciones } from "./operacionesInteres";
export function presentaResultado(caso, texto, setTexto, mostrar, setMostrar, mensajesR, setResultado, iI, vf, va, ii, nn) {
  let numMesaje;

  switch (caso) {
    case 1:
    case 2:
    case 3:
    case 16:
    case 17:
    case 18:
      numMesaje = 0;
      break;
    case 4:
    case 5:
    case 6:
    case 19:
    case 20:
    case 21:
      numMesaje = 1;
      break;
    case 7:
    case 8:
    case 9:
    case 22:
    case 23:
    case 24:
      numMesaje = 2;
      break;
    case 10:
    case 11:
    case 12:
    case 25:
    case 26:
    case 27:
      numMesaje = 3;
      break;
    case 13:
    case 14:
    case 15:
    case 28:
    case 29:
    case 30:
      numMesaje = 4;
      break;
  }
  texto[3] = mensajesR[numMesaje];
  const textoNuevo = [...texto];
  setTexto(textoNuevo);
  mostrar[3] = true;
  const mostrarNuevo = [...mostrar];
  setMostrar(mostrarNuevo);
  setResultado(operaciones(caso, iI, vf, va, ii, nn));
  
}