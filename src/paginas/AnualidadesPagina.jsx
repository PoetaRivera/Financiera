
import { useState } from "react";
//css
import "./interes.css";
import "./resultados.css";
//variables
import { mensajesI, mensajesR } from "../variables/variables.js";
//componentes
import Opcion from "../componentes/Opcion";
import Indicaciones from "../componentes/indicaciones.jsx";
import Incognita from "../componentes/Incognita";
import Datos from "../componentes/Datos";
import Calcular from "../componentes/Calcular";
import Resultados from "../componentes/Resultados.jsx";
import Seleccion from "../componentes/Seleccion.jsx";
//funciones
import { verificaSeleccion } from "../funciones/verificaSeleccion.js";
import { determinaCaso } from "../funciones/determinaCaso.js";
import { ejecutaCaso } from "../funciones/ejecutaCaso.js";
import { operaciones } from "../funciones/operacionesInteres.js";
import { alertaMensaje } from "../funciones/alertaMensaje.js";

export default function Anualidades({ tipo }) {
const [muestraIndicaciones, setMuestraIndicaciones] = useState(false);
const [incognita, setIncognita] = useState("I");
const [opcion, setOpcion] = useState("Simple");
const [caso, setCaso] = useState(0);
const [datos, setDatos] = useState({
  I: false,
  Vf: false,
  Va: false,
  i: false,
  n: false,
});
const [mostrar, setMostrar] = useState(Array(4).fill(false));
const [texto, setTexto] = useState(Array(4).fill(false));
const [resultado, setResultado] = useState("");
const [deshabilitado, setDeshabilitado] = useState(false);

const [iI, setII] = useState(0);
const [vf, setVf] = useState(0);
const [va, setVa] = useState(0);
const [ii, setIi] = useState(0);
const [nn, setNn] = useState(0);

// Desestructurar datos
const { I, Vf, Va, i, n } = datos;
// el tipo define si trabajo con interes(tipo=0) o con anualidades(tipo=1)
//const tipo = 0;

let numCaso;
console.log(tipo);
let etiquetaOpcion1 = "";
let etiquetaOpcion2 = "";
let etiquetaInicial = "";
let valorx = "";

if (tipo === 0) {
  etiquetaOpcion1 = "Simple";
  etiquetaOpcion2 = "Compuesto";
  etiquetaInicial = "I";
  valorx = "I";
} else {
  etiquetaOpcion1 = "Vencida";
  etiquetaOpcion2 = "Anticipada";
  etiquetaInicial = "R";
  valorx = "R";
}

//------------------------------------------------------------------------------------
const mouseEnter = () => {
  setMuestraIndicaciones(true);
};

const mouseLeave = () => {
  setMuestraIndicaciones(false);
};

function obtenerCaso() {
  if (verificaSeleccion(incognita, I, Vf, Va, i, n, tipo) === 0) {
    numCaso = determinaCaso(incognita, opcion, I, Vf, Va, i, n, tipo);
    ejecutaCaso(
      numCaso,
      texto,
      setTexto,
      mensajesI,
      mostrar,
      setMostrar,
      setCaso,
      setDeshabilitado,
      tipo
    );
  }
}

function manejarEntrada(e) {
  switch (caso) {
    case 1:
    case 16:
      e.target.name === "d1" && setVf(e.target.value);
      e.target.name === "d2" && setVa(e.target.value);
      break;
    case 2:
    case 17:
    case 6:
    case 21:
      e.target.name === "d1" && setVa(e.target.value);
      e.target.name === "d2" && setIi(e.target.value);
      e.target.name === "d3" && setNn(e.target.value);
      break;
    case 3:
    case 18:
    case 9:
    case 24:
      e.target.name === "d1" && setVf(e.target.value);
      e.target.name === "d2" && setIi(e.target.value);
      e.target.name === "d3" && setNn(e.target.value);
      break;
    case 4:
    case 19:
      e.target.name === "d1" && setII(e.target.value);
      e.target.name === "d2" && setVa(e.target.value);
      break;
    case 5:
    case 20:
    case 8:
    case 23:
      e.target.name === "d1" && setII(e.target.value);
      e.target.name === "d2" && setIi(e.target.value);
      e.target.name === "d3" && setNn(e.target.value);
      break;
    case 7:
    case 22:
      e.target.name === "d1" && setII(e.target.value);
      e.target.name === "d2" && setVf(e.target.value);
      break;
    case 10:
    case 25:
      e.target.name === "d1" && setVf(e.target.value);
      e.target.name === "d2" && setVa(e.target.value);
      e.target.name === "d3" && setNn(e.target.value);
      break;
    case 11:
    case 26:
      e.target.name === "d1" && setII(e.target.value);
      e.target.name === "d2" && setVf(e.target.value);
      e.target.name === "d3" && setNn(e.target.value);
      break;
    case 12:
    case 27:
      e.target.name === "d1" && setII(e.target.value);
      e.target.name === "d2" && setVa(e.target.value);
      e.target.name === "d3" && setNn(e.target.value);
      break;
    case 13:
    case 28:
      e.target.name === "d1" && setVf(e.target.value);
      e.target.name === "d2" && setVa(e.target.value);
      e.target.name === "d3" && setIi(e.target.value);
      break;
    case 14:
    case 29:
      e.target.name === "d1" && setII(e.target.value);
      e.target.name === "d2" && setVf(e.target.value);
      e.target.name === "d3" && setIi(e.target.value);
      break;
    case 15:
    case 30:
      e.target.name === "d1" && setII(e.target.value);
      e.target.name === "d2" && setVa(e.target.value);
      e.target.name === "d3" && setIi(e.target.value);
      break;
    default:
      break;
  }
}

function verificaEntradas() {
  switch (caso) {
    case 1:
    case 16:
      validarDatos([vf, va]);
      break;

    case 4:
    case 19:
      console.log(va);
      console.log(iI);
      validarDatos([va, iI]);
      break;

    case 7:
    case 22:
      validarDatos([vf, iI]);
      break;

    case 2:
    case 17:
    case 6:
    case 21:
      validarDatos([va, ii, nn]);
      break;

    case 3:
    case 18:
    case 9:
    case 24:
      validarDatos([vf, ii, nn]);
      break;

    case 5:
    case 20:
    case 8:
    case 23:
      validarDatos([iI, ii, nn]);
      break;

    case 10:
    case 25:
      validarDatos([vf, va, nn]);
      break;

    case 11:
    case 26:
      validarDatos([iI, vf, nn]);
      break;

    case 12:
    case 27:
      validarDatos([iI, va, nn]);
      break;

    case 13:
    case 28:
      validarDatos([vf, va, ii]);
      break;

    case 14:
    case 29:
      validarDatos([iI, vf, ii]);
      break;

    case 15:
    case 30:
      validarDatos([iI, va, ii]);
      break;

    default:
      break;
  }
  function validarDatos(datos) {
    if (datos.some((dato) => dato === undefined || dato === 0 || dato === "")) {
      alertaMensaje("Ingrese todos los datos conocidos");
    } else {
      presentaResultado(tipo);
    }
  }
}

function presentaResultado(tipo) {
  let numMesaje;

  switch (caso) {
    case 1:
    case 2:
    case 3:
    case 16:
    case 17:
    case 18:
      tipo === 1 ? (numMesaje = 5) : (numMesaje = 0);
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
  setResultado(operaciones(caso, iI, vf, va, ii, nn, tipo));
}

function limpiar() {
  setCaso(0);
  setOpcion(etiquetaOpcion1);
  setIncognita(etiquetaInicial);
  setDatos({ ...Datos, I: false, Vf: false, Va: false, i: false, n: false });
  setMostrar(Array(4).fill(false));
  setTexto(Array(4).fill(false));
  setResultado("");
  setDeshabilitado(false);
  setII(0);
  setVf(0);
  setVa(0);
  setIi(0);
  setNn(0);
}

return (
  <main className="principal">
    <h2
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      style={{ height: "5px" }}
    >
      {tipo === 0 ? "Interes" : "Anualidades"}
    </h2>

    {muestraIndicaciones ? (
      <Indicaciones miClase={"aparecer"} />
    ) : (
      <Indicaciones miClase={"desaparecer"} />
    )}

    <Opcion
      deshabilitado={deshabilitado}
      // className="opcion"
      opcion1={etiquetaOpcion1}
      opcion2={etiquetaOpcion2}
      opcion={opcion}
      setOpcion={setOpcion}
      tipo={tipo}
    ></Opcion>

    <Incognita
      deshabilitado={deshabilitado}
      // className="incognita"
      valor1={valorx}
      valor2="Vf"
      valor3="Va"
      valor4="i"
      valor5="n"
      incognita={incognita}
      setIncognita={setIncognita}
    ></Incognita>

    <Datos
      deshabilitado={deshabilitado}
      valor1={valorx}
      valor2="Vf"
      valor3="Va"
      valor4="i"
      valor5="n"
      // className="datos"
      datos={datos}
      setDatos={setDatos}
    ></Datos>

    <Seleccion
      obtenerCaso={obtenerCaso}
      deshabilitado={deshabilitado}
    ></Seleccion>

    <Resultados
      manejarEntrada={manejarEntrada}
      mostrar={mostrar}
      texto={texto}
      resultado={resultado}
    ></Resultados>

    <Calcular verificaEntradas={verificaEntradas} limpiar={limpiar}></Calcular>
  </main>
);
}
