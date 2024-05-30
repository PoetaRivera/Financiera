import { useState } from "react";
import { datosContexto } from "./datosContexto";

export function ContenedorDatos({ children }) {
  const [tipo, setTipo] = useState(-1);


  return (
    <datosContexto.Provider value={{tipo, setTipo}}>
      {children}
    </datosContexto.Provider>
  );
}



