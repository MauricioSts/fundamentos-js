const inputTarefa = document.querySelector(".input-tarefa"); //captura a class do html (input)
const btnTarefa = document.querySelector(".btn-tarefa"); //captura a class do html (button)
const tarefas = document.querySelector(".tarefas"); //captura a class do html (ul)

function criaLi() {
  const li = document.createElement("li"); //cria o elemento li direto do js
  return li;
}

function criaTarefa(textoInput) {
  const li = criaLi(); // recebe a func criaLi
  li.innerText = textoInput; // recebe o parametro passado pelo inputTarefa.value
  tarefas.appendChild(li); //faz com que a variavel tarefas (ul) receba como filho o li
  criaBotaoApagar(li); //func que cria um botao dentro do li
}

btnTarefa.addEventListener("click", function () {
  //func que o btn faz para criar a tarefa
  if (!inputTarefa.value) return; //caso o usuario na passe nenhum valor, nada sera exibido
  criaTarefa(inputTarefa.value); //passa o valor digitado para a func cria tarefa que recebe como parametro o textoInput e o passa para o li que sera exibido na tela
  limparInput(); //func que limpa o input automaticamente quando o btn é clicado
});

inputTarefa.addEventListener("keypress", function (e) {
  //func que ao clicar no enter a criaTarefa() é ativado
  if (!inputTarefa.value) return; //caso o usuario nao passe nenhum valor, nadda sera exibido
  if (e.keyCode === 13) {
    // keycode nada mais é que o codigo do enter, e caso o enter seja clicado acontece as duas func seguintes
    criaTarefa(inputTarefa.value); //passa o valor digitado para a func cria tarefa que recebe como parametro o textoInput e o passa para o li que sera exibido na tela
    limparInput(); //func que limpa o input automaticamente quando o btn é clicado
  }
});

function limparInput() {
  //func parar limpar o input
  inputTarefa.value = ""; //deixa o valor zerado assim que o btn for clicado
  inputTarefa.focus(); //aparece o | assim que o botao for clicado, indicando que o usuario pode passar um novo valor
}

function criaBotaoApagar(li) {
  //cria um botao apagar dentro do li
  li.innerText += " "; //separa o texto do botao
  const botaoApagar = document.createElement("button"); //cria o botao direto do js para o html
  botaoApagar.innerText = "Apagar"; //adiciona o texto "apagar" ao botao
  botaoApagar.setAttribute("class", "apagar"); //adiciona o atributo class e o nome da classe "apagar"
  botaoApagar.setAttribute("title", "Apagar essa atividade"); //adiciona o atributo titulo e o nome do titulo para melhor compreensao do usuario
  li.appendChild(botaoApagar); // faz com que o li tenha um filho, ou seja, o botaoApagar
  salvarTarefas(); //assim que criar o botao de apagar ira salvar as tarefas.
}
//apagar tarefa

document.addEventListener("click", function (e) {
  // faz a func para apagar a tarefa
  const el = e.target; //recebe o valor do click do usuario no document
  if (el.classList.contains("apagar")) {
    //caso o valor recebido pela variavel el contenha a class 'apagar, acontece a func abaixo
    el.parentElement.remove(); //remove o pai do elemento clicado, ou seja, se eu clicar no botaoApaagar, ira remover o pai dele (li) e consequentemente ele tbm
    salvarTarefas(); //assim que apagar alguma tarefa, o progresso sera salvo
  }
});

//Salvar tarefas

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li"); //seleciona todos os li do ul (tarefas)
  const listaDeTarefas = []; //vai receber a tarefaTexto e vai passar como um array
  for (let tarefa of liTarefas) {
    //vai iterar sobre todos os li de tarefas
    let tarefaTexto = tarefa.innerText; //vai pegar todas as tarefas escritas
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); //replace vai substituir o apagar por uma string vazia e o trim vai formatar tudo
    listaDeTarefas.push(tarefaTexto); //vai enviar todas as tarefas para a listaDeTarefas
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas); //vai converter a string de arry para json
  localStorage.setItem("tarefas", tarefasJSON); //vai salvar no localstorage do navegador a string tarefas presentes na variavel tarefasJSON
}

function adicionaTarefasSalvas() {
  //vai voltar as tarefas salvas quando a pagina for carregada novamente
  const tarefas = localStorage.getItem("tarefas"); //vai pegar do localstorage as tarefas
  const listaDeTarefas = JSON.parse(tarefas); //vai transformar de JSON para um array
  for (let tarefa of listaDeTarefas) {
    //vai iterar todas as tarefas de listaDeTarefas e transformalas em uma tarefa por meio da func abaixo
    criaTarefa(tarefa); //transforma as tarefas passadas em tarefas novamente
  }
}
adicionaTarefasSalvas(); //executa a func
