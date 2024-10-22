function criaCalculadora() {
  return {
    display: document.querySelector(".display"), //seleciona a classe display do html

    inicia() {
      //inicia os metodos
      this.cliqueBotoes();
      this.pressionaBackSpace();
      this.pressionaEnter();
    },

    pressionaBackSpace() {// apaga tudo precionando o delete
      this.display.addEventListener("keydown", (e) => {
        if (e.keyCode === 8) {
          e.preventDefault();//previne que a pagina atualize
          this.clearDisplay();//func q cleana tudo
        }
      });
    },

    pressionaEnter() {//realiza a conta apos o enter
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;//transforma a variavel conta no valor que estiver no display

      try {
        conta = eval(conta);//tenta realizar a conta por meio do eval que transforma tudo em js

        if (!conta) {//se nao tiver nada diz a msg abaixo
          alert("Conta inválida");
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";//metodo que cleana o display totalmente
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);//o slice seleciona a string toda e apaga -1 por vez
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;//seleciona o clique

        if (el.classList.contains("btn-num")) {//recebe o valor do innertext do elemento clicado como parametro
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();//chamaa a func clearDisplay 
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();//chama a func apaga um
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();//chama a func realiza conta
        }

        this.display.focus();//permite que o usuario comece a digitar sem clicar
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;//concatena o valor que esta no display, com o parametro passado para a func que no caso foi o clique 
    },
  };
}

const calculadora = criaCalculadora();//cria uma nova calculadora
calculadora.inicia();//inicia ela
