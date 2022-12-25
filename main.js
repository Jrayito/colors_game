// Amarillo - Azul - Rojo - Verde - Morado - Rosa = 4 * 6 = 24 y sobra una casilla
// Definicion de los colores
let colores = [
   { "value": 0, "color": "#ffeb3b" },    //  amarillo
   { "value": 0, "color": "#2196f3" },    // azul
   { "value": 0, "color": "#f44336 " },   // Rojo
   { "value": 0, "color": "#4caf50" },    //Verde
   { "value": 0, "color": "#64b5f6" },    //Morado
   { "value": 0, "color": "#e91e63" }     //Rosa
]

let arrColores = [];

const generarColores = () => {

   let index = 0;
   while (index < 9) {
      let random = parseInt(Math.random() * 6);
      if (index >= 2) {
         if (arrColores[index - 1] != random && arrColores[index - 2] != random) {
            arrColores.push(random);
            index++;
         }
      } else {
         arrColores.push(random);
         index++;
      }
   }
   pintarCuadros();
}

const pintarCuadros = () => {
   $('.contenedor').html(' ');

   let index = 0;
   const timerAdd = setInterval(function () {
      if (index < arrColores.length) {
         const div = $('<div/>', { css: { backgroundColor: colores[arrColores[index]]['color'] } });
         $('.contenedor').append(div);
         index++;
      } else {
         window.clearInterval(timerAdd);
   arrColores = [];

      }
   }, 500)


   // for (let index = 0; index < arrColores.length; index++) {
   //    const div = $('<div/>', { css: { backgroundColor: colores[arrColores[index]]['color'] } }).addClass('animate__animated animate__backInDown').delay(3000);
   //    $('.contenedor').append(div);
   // }
}

const convertirAReloj = (seg) => {
   let minutos = parseInt(seg / 60);
   let segundo = seg - 60 * minutos;
   let izquierda = "00";
   let derecha = "00";
   if (minutos < 10) izquierda = "0" + minutos;
   else izquierda = minutos;
   if (segundo < 10) derecha = "0" + segundo;
   else derecha = segundo;
   return izquierda + ":" + derecha;
}