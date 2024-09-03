function defImc() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function gerarImc(evento) {
    evento.preventDefault();
    const peso = parseFloat(form.querySelector(".peso").value);
    const altura = parseFloat(form.querySelector(".altura").value);
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
      resultado.innerHTML += `<p>Seu imc é: ${imc.toFixed(2)} (Abaixo do peso)</p>`;
    } else if (imc >= 18.5 && imc <= 24.9 ){
      resultado.innerHTML +=  `<p>Seu imc é: ${imc.toFixed(2)} (Peso normal)</p>`
    } else if (imc >= 25 && imc <= 29.9){
       resultado.innerHTML +=  `<p>Seu imc é: ${imc.toFixed(2)} (sobrepeso)</p>`
    } else if (imc >= 30 && imc <= 34.9){
      resultado.innerHTML +=  `<p>Seu imc é: ${imc.toFixed(2)} (obesidade grau 1)</p>`
   }  else if (imc >= 35 && imc <= 39.9){
      resultado.innerHTML +=  `<p>Seu imc é: ${imc.toFixed(2)} (obesidade grau 2)</p>`
  } else {
    resultado.innerHTML +=  `<p>Seu imc é: ${imc.toFixed(2)} (obesidade grau 3)</p>`
  }}
  form.addEventListener("submit", gerarImc);
}
defImc();
