const resultado = document.querySelector(".resultado");

// for (let p of pezinhos) {
// console.log(p);
// p.style.backgroundColor = "#f1f";
// }

numeroUm = prompt("escreva um numero");
numeroDois = prompt("escreva outro numero");

if (numeroUm > numeroDois) {
  resultado.innerHTML = `O maior numero é o ${numeroUm}`;
} else {
  resultado.innerHTML = `O maior numero é o ${numeroDois}`;
}
