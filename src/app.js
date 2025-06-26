let quien = ['Maria', 'Juan', 'Fulano', 'Perencejo', 'Mengano'];
let accion = ['rompió', 'aplastó', 'rayó', 'ensució', 'acomodó'];
let objeto = ['el auto', 'la casa', 'la bici', 'la moto', 'el computador'];
let cuando = ['empezando el día', 'en la noche', 'durante el almuerzo', 'el fin de semana'];

function genEx() {
  const numquien = Math.floor(Math.random() * quien.length);
  const numaccion = Math.floor(Math.random() * accion.length);
  const numobjeto = Math.floor(Math.random() * objeto.length);
  const numcuando = Math.floor(Math.random() * cuando.length);
  return `${quien[numquien]} ${accion[numaccion]} ${objeto[numobjeto]} ${cuando[numcuando]}`;
}

function cargar() {
  const excusahtml = document.getElementById("excusahtml");
  if (excusahtml) {
    excusahtml.innerHTML = genEx();
  } else {
    console.warn("No se encontró el elemento #excusahtml");
  }
}

// Ejecutar al abrir el modal
// ... tus arrays y funciones genEx, cargar (igual que antes)

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("exampleModal");
  if (modal) {
    modal.addEventListener("show.bs.modal", () => {
      cargar(); // genera excusa al abrir modal
    });
  }

  // Referencia al botón Generar Excusa en el modal
  const btnGenerar = document.getElementById("btnGenerarExcusa");
  if (btnGenerar) {
    btnGenerar.addEventListener("click", () => {
      cargar(); // genera excusa al hacer click
    });
  }
});

