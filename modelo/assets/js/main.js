function defImc() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function gerarImc(evento) {
    evento.preventDefault();
    const peso = parseFloat(form.querySelector(".peso").value);
    const altura = parseFloat(form.querySelector(".altura").value);
    const imc = peso / (altura * altura);

    if (imc > 18,5) {
      resultado.innerHTML += `<p>Seu imc é: ${imc.toFixed(2)} (ABAIXO DO PESO)</p>`;
    }
  }
  form.addEventListener("submit", gerarImc);
}
defImc();
