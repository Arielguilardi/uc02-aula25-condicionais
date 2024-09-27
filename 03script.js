//Faça um programa que obtenha quatro notas de um aluno
// Em seguida, calcule a média simples das notas
// Se a média for maior ou igual a 7, imprima "Aluno Aprovado"
// Senão, se a nota for maior ou igual a 5, imprima "Aluno em Recuperação"
// Senao, imprima "Aluno Reprovado"

// ENTRADA
const nota1 = Number(prompt("Informe a nota do 1º bimestre"))
const nota2 = Number(prompt("Informe a nota do 2º bimestre"))
const nota3 = Number(prompt("Informe a nota do 3º bimestre"))
const nota4 = Number(prompt("Informe a nota do 4º bimestre"))

//Processamento
const media = (nota1 + nota2 + nota3 + nota4) / 4

let mensagem = ""

//se a media é maior ou igual a 7. "Aluno Aprovado"
//senão, se a média for maior ou igual a 5, "Aluno em Recuperação"
//senão, "Aluno Reprovado"

if (media >= 7) {
    mensagem = "Aluno Aprovado"
    console.log("Aluno Aprovado");

} else {
    if (media >= 5) {
        mensagem = "Aluno em Recuperação"
    } else {
        mensagem = "Aluno Reprovado"
    }
}

document.body.appendChild(document.createTextNode(mensagem + `- media ${media}`))