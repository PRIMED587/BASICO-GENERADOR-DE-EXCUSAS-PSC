
let quien = ['Maria', 'Juan', 'Fulano', 'Perencejo', 'Mengano'];
let accion = ['rompio', 'aplastó', 'rayo', 'ensucio', 'acomodo'];
let objeto = ['el auto', 'la casa', 'la bici', 'la moto', 'el computador']
let cuando = ['Empezando el dia', 'En la noche', 'durante el almuerzo', 'el fin de semana'];

function genEx(quien, accion, objeto, cuando) {
    numquien = Math.floor(Math.random() * quien.length);
    numque = Math.floor(Math.random() * accion.length);
    numobjeto = Math.floor(Math.random() * objeto.length);
    numcuando = Math.floor(Math.random() * cuando.length);
    return quien[numquien] + " " + accion[numque] + " " + objeto[numobjeto] + " " + cuando[numcuando];
}
function cargar() {
    var excusahtml = document.getElementById("excusahtml");
    excusahtml.innerHTML = genEx(quien, accion, objeto, cuando);
    
}

cargar();
console.log(cargar);

