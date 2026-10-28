const formulario = document.getElementById("form-calculadora");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    const resultado = document.getElementById("resultado");
    const soma = numero1 + numero2;

    resultado.textContent = "Resultado: " + soma;
});