const resultado = document.querySelector(".resultado");
function transformData(diaSemana) {
  let diaTexto;
  switch (diaSemana) {
    case 0:
      diaTexto = "domingo";
      return diaTexto;
    case 1:
      diaTexto = "segunda";
      return diaTexto;
    case 2:
      diaTexto = "terça";
      return diaTexto;
    case 3:
      diaTexto = "quarta";
      return diaTexto;
    case 4:
      diaTexto = "quinta";
      return diaTexto;
    case 5:
      diaTexto = "sexta";
      return diaTexto;
    case 6:
      diaTexto = "sabado";
      return diaTexto;
  }
}

const data = new Date();
const diaSemana = data.getDay();
const diaTexto = transformData(diaSemana);

resultado.innerHTML += `${(diaSemana, diaTexto)}`;
