const dataAtual = document.getElementById("data-atual");

const hoje = new Date();

dataAtual.textContent =
    "Data de execução: " + hoje.toLocaleDateString("pt-BR");