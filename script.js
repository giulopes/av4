// script.js
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pegando as notas inseridas pelo usuário
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);

    // Calculando a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Verificando a situação do aluno
    let resultado = media >= 6 ? "Aprovado" : "Reprovado";

    // Exibindo o resultado
    document.getElementById("resultado").innerHTML = `Sua média foi ${media.toFixed(2)}. Você está ${resultado}.`;
});
