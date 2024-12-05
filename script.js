function calcularMediaNecessaria(mediaFinal) {
    const pesoSemestre = 2;
    const limiteMedia = 15;
    const notaSemestrePonderada = mediaFinal * pesoSemestre;
    return limiteMedia - notaSemestrePonderada;
}

function calcular() {
    const mediaFinal = parseFloat(document.getElementById("mediaFinal").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(mediaFinal) || mediaFinal < 0 || mediaFinal > 10) {
        resultado.textContent = "Por favor, insira uma nota válida entre 0.0 e 10.0!";
        return;
    }

    const mediaNecessaria = calcularMediaNecessaria(mediaFinal);

    if (mediaFinal < 2.5) {
        resultado.textContent = "Você ta todo estourado na calçada, já perdeu pae!";
    } else if (mediaFinal > 6.9) {
        resultado.textContent = "Você ta passado pae!";
    } else {
        resultado.textContent = `Você precisa tirar ${mediaNecessaria.toFixed(1)} pontos para passar! Quem passa direto é trem!`;
    }
}

function toggleInstrucoes() {
    const instrucoes = document.getElementById("instrucoes");
    if (instrucoes.style.display === "none" || instrucoes.style.display === "") {
        instrucoes.style.display = "block";
    } else {
        instrucoes.style.display = "none";
    }
}
