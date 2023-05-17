//const estudante = {
//nome: "Ben",
//sobrenome: "Ruiz",
//numeroMatricula: "123",
//notaSemestre: [3, 10, 5]

//}

//console.log(estudante)
//estudante.modulo = 1
//estudante["modulo"] = 1
//console.log(estudante.nome)
//console.log(estudante["nome"])
//console.log(estudante.notaSemestre[1])
//console.log(estudante.modulo)

//const copiaEstudante = {
//    ...estudante,
//nome: "Astrodev",
//notaSemestre: [...estudante, notaSemestre, 9],
//modulo:estudante.modulo+1

//}
//console.log(copiaEstudante)

//const estudanteLabenu = []

//estudanteLabenu.push(estudante, copiaEstudante)

//console.log(estudanteLabenu)

//-------------------------

const carrinho = {
    nome: "Benja",
    formaDePagamento: "cartao",
    endereco: "rua do descasca esse abacaxi, 69",
    compras: [
        {nomeDoProduto: "PS5", 
        preco:520.00, 
        quantidade:01, }
    ]
}
console.log(carrinho.compras.length)

const carrinhoPresente = {
    ...carrinho,
    nome: "Carol",
    formaDePagamento: "cartao presente"
}

console.log(carrinho)
console.log(carrinhoPresente)

