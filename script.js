function verificarIdade() {

    let inputIdade = document.getElementById("idade");

    let idade = parseInt(inputIdade.value);

    let resultado = document.getElementById("resultado");
    
    if (isNaN(idade)|| idade < 0) {
        resultado.textContent = "insira uma idade valida.";
        resultado.style.color = "red";
        return
    } 
    if (idade >=18){
        resultado.textContent = "Você é maior de idade";
        resultado.style.color = "green";
    }else {
        resultado.textContent = "você é menor de idade";
        resultado.style.color = "orange";
    }
    
        
}