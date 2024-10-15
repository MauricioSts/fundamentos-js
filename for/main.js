const elementos = [
  { tag: "p", texto: "Qualquer texto" },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase4" },
];

const container = document.querySelector(".container"); 
const div = document.createElement("div");

for (
  let i = 0;
  i < elementos.length; // PERCORRE TODOS OS ELEMENTOS QUE ESTAO NO ARRAY
  i++
) {
  let { tag, texto } = elementos[i]//DESESTRUTURAÇÃO DOS ELEMENTOS TAG E TEXTO, PARA FACILITAR A SELEÇÃO DOS MESMOS. iguala ao elementos[i] para capturar os valores guardados no array.
  let tagCriada = document.createElement(tag);//CRIA O ELEMENTO TAG
  let textoCriado = document.createTextNode(texto);//CRIA O ELEMENTO TEXTO
  tagCriada.appendChild(textoCriado);//FAZ COM QUE A TAGCRIADA RECEBA UM FILHO QUE É O TEXTO CRIADO
  div.appendChild(tagCriada);//FAZ COM QUE A DIV RECEBA UM FILHO QUE É A TAGCRIADA(que vem com o texto criado)
}

container.appendChild(div);//FAZ COM QUE O CONTAINER RECEBA UM FILHO (DIV)
