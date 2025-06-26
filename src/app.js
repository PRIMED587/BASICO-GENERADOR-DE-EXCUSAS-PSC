window.onload = () => {

    let quien = ['Maria', 'Juan', 'Fulano', 'Perencejo', 'Mengano'];
    let accion = ['rompio', 'aplastó', 'rayo', 'ensucio', 'acomodo'];
    let objeto = ['el auto', 'la casa', 'la bici', 'la moto', 'el computador']
    let cuando = ['Empezando el dia', 'En la noche', 'durante el almuerzo', 'el fin de semana'];

    function genEx(quien, accion, objeto, cuando) {
       const numquien = Math.floor(Math.random() * quien.length);
       const  numque = Math.floor(Math.random() * accion.length);
       const  numobjeto = Math.floor(Math.random() * objeto.length);
       const  a numcuando = Math.floor(Math.random() * cuando.length);
        return quien[numquien] + " " + accion[numque] + " " + objeto[numobjeto] + " " + cuando[numcuando];
    }
    function cargar() {
        var excusahtml = document.getElementById("excusahtml");
        excusahtml.innerHTML = genEx(quien, accion, objeto, cuando);

    }

    const boton = document.getElementById("generate-excuse")
    boton.addEventListener("click", cargar)
}



