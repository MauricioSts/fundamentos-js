const numero = Number(prompt("digite um numero"));
const numeroTitulo = document.getElementById('numero-titulo');
const divTexto = document.getElementById('texto');

numeroTitulo.innerHTML = numero

divTexto.innerHTML = "";
divTexto.innerHTML += `<p>a raiza quadrada de ${numero} é ${Math.sqrt(numero)}</p>`;
divTexto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
divTexto.innerHTML += `<p>É NaN? ${isNaN(numero)}</p>`
divTexto.innerHTML += `<p>arredondando para baixo: ${Math.floor(numero)} </p>`
divTexto.innerHTML += `<p>arredondando para cima: ${Math.ceil(numero)} </p>`
divTexto.innerHTML += `<p>com duas casa decimais ${numero.toFixed(2)} </p>`