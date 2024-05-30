//verifica que al menos un dato conocido sea seleccionado
import { alertaMensaje } from "./alertaMensaje";

export function verificaSeleccion(incognita, I, Vf, Va, i, n, tipo) {
  let numI, numVf, numVa, numi, numn, suma;
  const mensajesAlert = [
    "Debe seleccionar datos conocidos",
    "No es selección válida",
    "Opcion no valida para anualidades",
  ];
  const [mensaje1, mensaje2, mensaje3] = mensajesAlert;
  //asignamos 1 o 0 si la variable indicadora de dato conocido es true o false
  I ? (numI = 1) : (numI = 0);
  Vf ? (numVf = 1) : (numVf = 0);
  Va ? (numVa = 1) : (numVa = 0);
  i ? (numi = 1) : (numi = 0);
  n ? (numn = 1) : (numn = 0);

  suma = numI + numVf + numVa + numi + numn;
  //ningun dato conocido seleccionado
  if (suma === 0) {
    alertaMensaje(mensaje1);
    // 4 o 5 datos conocidos seleccionado no son opciones validas
  } else if (suma === 5 || suma === 4) {
    alertaMensaje(mensaje2);
  } else {
    switch (incognita) {
      case "I":
      case "R":
        if (tipo === 0 && !I && Vf && Va && !i && !n) {
          return 0;
        } else if (tipo === 1 && !I && Vf && Va && !i && !n) {
          alertaMensaje(mensaje3);
          break;
        }
        if (!I && !Vf && Va && i && n) return 0;
        if (!I && Vf && !Va && i && n) return 0;
        else alertaMensaje(mensaje2);
        break;
      case "Vf":
        if (tipo === 0 && I && !Vf && Va && !i && !n) {
          return 0;
        } else if (tipo === 1 && I && !Vf && Va && !i && !n) {
          alertaMensaje(mensaje3);
          break;
        }
        if (I && !Vf && !Va && i && n) return 0;
        if (!I && !Vf && Va && i && n) return 0;
        else alertaMensaje(mensaje2);
        break;
      case "Va":
        if (tipo === 0 && I && Vf && !Va && !i && !n) {
          return 0;
        } else if (tipo === 1 && I && Vf && !Va && !i && !n) {
          alertaMensaje(mensaje3);
          break;
        }
        if (I && !Vf && !Va && i && n) return 0;
        if (!I && Vf && !Va && i && n) return 0;
        else alertaMensaje(mensaje2);
        break;
      case "i":
        if (tipo === 0) {
          if (!I && Vf && Va && !i && n) return 0;
          if (I && Vf && !Va && !i && n) return 0;
          if (I && !Vf && Va && !i && n) return 0;
          else alertaMensaje(mensaje2);
          break;
        } else if (
          tipo === 1 &&
          ((!I && Vf && Va && !i && n) ||
            (I && Vf && !Va && !i && n) ||
            (I && !Vf && Va && !i && n))
        ) {
          alertaMensaje(mensaje3);
          break;
        } else alertaMensaje(mensaje2);
        break;
      case "n":
        if (tipo === 0 && !I && Vf && Va && i && !n) {
          return 0;
        } else if (tipo === 1 && !I && Vf && Va && i && !n) {
          alertaMensaje(mensaje3);
          break;
        }
        if (I && Vf && !Va && i && !n) return 0;
        if (I && !Vf && Va && i && !n) return 0;
        else alertaMensaje(mensaje2);
        break;
      default:
        alertaMensaje(mensaje2);
        break;
    }
  }
}
