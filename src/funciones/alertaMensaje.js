import Swal from "sweetalert2";

export function alertaMensaje(mensajeAlert) {
  Swal.fire({
    background: "#ECEFF1",
    position: "top",
    showConfirmButton: false,
    titleText: mensajeAlert,
    toast: true,
    timer: 2000,
  });
}
