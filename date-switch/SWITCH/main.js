// setInterval(function() {
//     location.reload();
// }, 5000);

// const resultado = document.querySelector(".resultado");
// function transformData(diaSemana) {
//   let diaTexto;
//   switch (diaSemana) {
//     case 0:
//       diaTexto = "domingo";
//       return diaTexto;
//     case 1:
//       diaTexto = "segunda";
//       return diaTexto;
//     case 2:
//       diaTexto = "terça";
//       return diaTexto;
//     case 3:
//       diaTexto = "quarta";
//       return diaTexto;
//     case 4:
//       diaTexto = "quinta";
//       return diaTexto;
//     case 5:
//       diaTexto = "sexta";
//       return diaTexto;
//     case 6:
//       diaTexto = "sabado";
//       return diaTexto;
//   }
// }

// function transformMes(mes) {
//   let mesTexto;
//   switch (mes) {
//     case 0:
//       mesTexto = "Janeiro";
//       return mesTexto;
//     case 1:
//       mesTexto = "Feveireiro";
//       return mesTexto;
//     case 2:
//       mesTexto = "Março";
//       return mesTexto;
//     case 3:
//       mesTexto = "Abril";
//       return mesTexto;
//     case 4:
//       mesTexto = "Maio";
//       return mesTexto;
//     case 5:
//       mesTexto = "Junho";
//       return mesTexto;
//     case 6:
//       mesTexto = "Julho";
//       return mesTexto;
//     case 7:
//       mesTexto = "Agosto";
//       return mesTexto;
//     case 8:
//       mesTexto = "Setembro";
//       return mesTexto;
//     case 9:
//       mesTexto = "Outubro";
//       return mesTexto;
//     case 10:
//       mesTexto = "Novembro";
//       return mesTexto;
//     case 11:
//       mesTexto = "Dezembro";
//       return mesTexto;
//   }
// }

// const data = new Date();
// const diaSemana = data.getDay();
// const diaTexto = transformData(diaSemana);

// const diaMes = data.getMonth();
// const mesTexto = transformMes(diaMes);

// resultado.innerHTML += `<p>${diaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()}</p>`;
// resultado.innerHTML += `<p>${data.getHours()}:${data.getMinutes()}</p>`;

const resultado = document.querySelector(".resultado");
const data = new Date();
const opcoes = {
  dataStyle: "full",
  timeStyle: "short",
};
