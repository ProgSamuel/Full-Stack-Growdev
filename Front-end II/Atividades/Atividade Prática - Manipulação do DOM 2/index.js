// Chamadas
const cards = document.querySelectorAll(".card")
const tituloCard = document.querySelectorAll(".titulo-card")
const descricaoCard = document.querySelectorAll(".descricao-card")
const botaoEditar = document.querySelectorAll(".botao-editar")
const botaoDeletar = document.querySelectorAll(".botao-apagar")

//funções
function personalizarBotao (card){
    card.style.padding = '5%'
    card.style.border = 'none'
    card.style.color= '#ffffff'
    card.style.borderRadius = "10px"
}

function clicou (){
    const clicou = alert("Clicou em Editar!")
}

function apagarCard(){
    const apagar = confirm("Tem certeza que deseja exclui o card?")
    if (apagar){
        alert('Confirmado!')
    } else {
      alert ('Cancelado!')
    }
}

// Modificações
cards.forEach((card) => {
    card.style.backgroundColor = "#E16E0E";
});

tituloCard.forEach((card) => {
card.style.color = "#2B385B"
card.innerHTML = "Meu Card"
card.style.margin = '10px'

})

descricaoCard.forEach((card) => {
    card.innerHTML = "Descrição modificada pelo JavaScript"
    card.style.color = "#ffffff"
    card.style.fontSize = '12px'
    card.style.margin = '25px'
})


botaoEditar.forEach((card) => {
    personalizarBotao(card)
    card.style.backgroundColor = '#008000'
    card.addEventListener("click", clicou)
})

botaoDeletar.forEach((card) => {
    personalizarBotao(card)
    card.style.backgroundColor = '#FF0000'
    card.addEventListener("click", apagarCard) // corrigir

})


