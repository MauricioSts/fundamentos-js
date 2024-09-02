const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const idade = document.getElementById("idade");
const divCartoes = document.getElementById("cartoes");

const adicionarCartao = () => {
  // Obtemos os valores dos inputs
  const nomeValue = nome.value;
  const sobrenomeValue = sobrenome.value;
  const idadeValue = idade.value;

  // Criamos um novo elemento de cartão
  const novoCartao = document.createElement("div");
  novoCartao.classList.add("cartao");
  novoCartao.innerHTML = `
        <p>Nome: ${nomeValue}</p>
        <p>Sobrenome: ${sobrenomeValue}</p>
        <p>Idade: ${idadeValue}</p>
    `;

  // Adicionamos o novo cartão ao divCartoes
  divCartoes.appendChild(novoCartao);

  // Limpamos os campos de entrada
  nome.value = "";
  sobrenome.value = "";
  idade.value = "";
};

// Adicionamos um evento ao botão para chamar a função quando clicado
document.querySelector("button").addEventListener("click", adicionarCartao);
 