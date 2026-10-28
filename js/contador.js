let contador = 0;

const valorContador = document.getElementById("valor-contador");

function atualizarContador() {
    valorContador.textContent = contador;
}

document.getElementById("aumentar").addEventListener("click", function () {
    contador++;
    atualizarContador();
});

document.getElementById("diminuir").addEventListener("click", function () {
    contador--;
    atualizarContador();
});

document.getElementById("reiniciar").addEventListener("click", function () {
    contador = 0;
    atualizarContador();
});