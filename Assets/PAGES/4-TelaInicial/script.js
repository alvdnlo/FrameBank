const saldo = document.getElementById("saldo");
const eyeButton = document.getElementById("eyeButton");
const openEye = document.getElementById("openEye");
const closedEye = document.getElementById("closedEye");
let saldoVisivel = false;

eyeButton.addEventListener("click", function() {
    if (saldoVisivel) {
        saldo.textContent = "R$ ****";
        openEye.style.display = "inline";
        closedEye.style.display = "none";
    } else {
        saldo.textContent = "R$ 5.230,00"; // Exemplo de saldo
        openEye.style.display = "none";
        closedEye.style.display = "inline";
    }
    saldoVisivel = !saldoVisivel;
});