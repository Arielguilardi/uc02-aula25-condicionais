//Crie o programa de somar dois números e valide se for > que 5 apresentar mensagem "Passou do limite"
//Senão, escreva a mensagem "Dentro do limite"

// ENTRADA
// 1 = obter o valor um e guardar na variavel valor1
// 2 = obter o valor dois e guardar na variavel valor2
const valor1 = Number(prompt("Informe o primeiro numero"));
const valor2 = Number(prompt("Informe o segundo numero"));
console.log(valor1, valor2);


//PROCESSAMENTO
//3 = Somar os valores de valor1 e valor2 e guardar o resultado em uma variavel chamada resultado

const resultado = valor1 + valor2;
console.log(resultado);

//4 = Validar se o resultado é maior que 5 e escrever a mensagem "Passou do limte"
//Senão, escrever a mensagem "Dentro do limte"
let mensagem = ""

if (resultado > 5) {
    mensagem = "Passou do limite"
} else {
    mensagem = "Dentro do limte"
}


//SAIDA
//5 - Imprimir a mensagem de acordo
const divRoot = document.getElementById("root");
divRoot.appendChild(document.createTextNode(mensagem));


//================================================

const percentual = (valor1 * 0.10) / valor2

//se o percentual for maio ou igual  a 10
// então,  mude a mensagem para Percentual OK
// senão, mude a mensagem para percentual Alterado


if (percentual >= 10) { //igual a "(percentual > 10) && (percentual === 10)"
    mensagem = "Percentual OK"
} else {
    mensagem = "percentual Alterado"
}