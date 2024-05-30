export function determinaCaso(incognita, opcion, I, Vf, Va, i, n, tipo) {
  const esSimple = tipo === 0 ? opcion === "Simple" : opcion === "Vencida";
  const esCompuesto =
    tipo === 0 ? opcion === "Compuesto" : opcion === "Anticipada";

  if (esSimple || esCompuesto) {
    switch (incognita) {
      case "I":
      case "R":
        if (!I && Vf && Va && !i && !n) return esSimple ? 1 : 16;

        if (!I && !Vf && Va && i && n) return esSimple ? 2 : 17;
        if (!I && Vf && !Va && i && n) return esSimple ? 3 : 18;
        break;
      case "Vf":
        if (I && !Vf && Va && !i && !n) return esSimple ? 4 : 19;

        if (I && !Vf && !Va && i && n) return esSimple ? 5 : 20;
        if (!I && !Vf && Va && i && n) return esSimple ? 6 : 21;
        break;
      case "Va":
        if (I && Vf && !Va && !i && !n) return esSimple ? 7 : 22;

        if (I && !Vf && !Va && i && n) return esSimple ? 8 : 23;
        if (!I && Vf && !Va && i && n) return esSimple ? 9 : 24;
        break;
      case "i":
        if (!I && Vf && Va && !i && n) return esSimple ? 10 : 25;
        if (I && Vf && !Va && !i && n) return esSimple ? 11 : 26;
        if (I && !Vf && Va && !i && n) return esSimple ? 12 : 27;

        break;
      case "n":
        if (!I && Vf && Va && i && !n) return esSimple ? 13 : 28;

        if (I && Vf && !Va && i && !n) return esSimple ? 14 : 29;
        if (I && !Vf && Va && i && !n) return esSimple ? 15 : 30;
        break;
      default:
        break;
    }
  }

  return undefined; // Opcional: Manejar caso no válido
}
