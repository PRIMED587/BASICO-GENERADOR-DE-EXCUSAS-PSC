let Quien = ['Maria','Juan','Fulano','Perencejo', 'Mengano'];
let Accion = ['rompio','aplastó','rayo','ensucio', 'acomodo'];
let Objeto = ['el auto','la casa','la bici','la moto', 'el computador']
let Cuando = ['Empezando el dia','En la noche','durante el almuerzo','el fin de semana'];

function GenEx (quien, accion, objeto, cuando){
    numQuien = Math.floor(Math.random) (Quien.length);
    numQue = Math.floor(Math.random) (Accion.length);
    numObjeto = Math.floor(Math.random) (Objeto.length);
    numCuando = Math.floor(Math.random) (Cuando.length);
    return Quien[numQuien] + " " + Que[numQue] + " " + Objeto[numObjeto] + " " + Cuando[numCuando];
}
function Cargar (){
    var excusahtml = document.getElementById('excusahtml');
    excusahtml.innerHTML = GenEx (quien, accion, objeto, cuando);
}
window.Cargar = Cargar;