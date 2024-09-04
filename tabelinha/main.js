function meuCiclo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function gerarResultado(evento) {
    evento.preventDefault();
    const dia_um = parseFloat(form.querySelector(".dia_um").value);
    const ciclo = parseFloat(form.querySelector(".ciclo").value);
    const periodo_fertil_normal = dia_um + 13;
    const dias_ferteis_negativos = periodo_fertil_normal - 3;
    const dias_ferteis_positivos = periodo_fertil_normal + 3;

    if (ciclo === 28) {
      resultado.innerHTML = `Entre os dias ${dias_ferteis_negativos} e ${dias_ferteis_positivos} voce estará no periodo fertil, e no dia ${periodo_fertil_normal} sera o dia com maiores chances de engravidar`;
    } else if (ciclo === 29) {
      resultado.innerHTML = `Entre os dias ${dias_ferteis_negativos + 1} e ${
        dias_ferteis_positivos + 1
      } voce estará no periodo fertil, e no dia ${
        periodo_fertil_normal + 1
      } sera o dia com maiores chances de engravidar`;
    } else if (ciclo === 30) {
      resultado.innerHTML = `Entre os dias ${dias_ferteis_negativos + 2} e ${
        dias_ferteis_positivos + 2
      } voce estará no periodo fertil, e no dia ${
        periodo_fertil_normal + 2
      } sera o dia com maiores chances de engravidar`;
    } else if (ciclo === 31) {
      resultado.innerHTML = `Entre os dias ${dias_ferteis_negativos + 3} e ${
        dias_ferteis_positivos + 3
      } voce estará no periodo fertil, e no dia ${
        periodo_fertil_normal + 3
      } sera o dia com maiores chances de engravidar`;
    } else if (ciclo === 32) {
      resultado.innerHTML = `Entre os dias ${dias_ferteis_negativos + 4} e ${
        dias_ferteis_positivos + 4
      } voce estará no periodo fertil, e no dia ${
        periodo_fertil_normal + 4
      } sera o dia com maiores chances de engravidar`;
    } else if (ciclo === 33) {
      resultado.innerHTML = `Entre os dias ${dias_ferteis_negativos + 5} e ${
        dias_ferteis_positivos + 5
      } voce estará no periodo fertil, e no dia ${
        periodo_fertil_normal + 5
      } sera o dia com maiores chances de engravidar`;
    } else if (ciclo === 34) {
      resultado.innerHTML = `Entre os dias ${dias_ferteis_negativos + 6} e ${
        dias_ferteis_positivos + 6
      } voce estará no periodo fertil, e no dia ${
        periodo_fertil_normal + 6
      } sera o dia com maiores chances de engravidar`;
    } else if (ciclo === 35) {
      resultado.innerHTML = `Entre os dias ${dias_ferteis_negativos + 7} e ${
        dias_ferteis_positivos + 7
      } voce estará no periodo fertil, e no dia ${
        periodo_fertil_normal + 7
      } sera o dia com maiores chances de engravidar`;
    } else {
      resultado.innerHTML = `funçao ainda nao implementada`;
    }
  }
  form.addEventListener("submit", gerarResultado);
}
meuCiclo();
