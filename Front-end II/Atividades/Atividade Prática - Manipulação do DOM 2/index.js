const cards = document.querySelectorAll(".card")
const tituloCard = document.querySelectorAll(".titulo-card")
const descricaoCard = document.querySelectorAll(".descricao-card")
const botaoEditar = document.querySelectorAll(".botao-editar")
const botaoDeletar = document.querySelectorAll(".botao-apagar")

cards.forEach((card) => {
    card.style.backgroundColor = "#E16E0E";
    card.style.justifyContent = "center"
    card.style.alignItems = "center"
});

tituloCard.forEach((card) => {
card.style.color = "#2B385B"
card.innerHTML = "Meu Card"
card.style.display = "flex"
})

descricaoCard.forEach((card) => {
    card.innerHTML = "Descrição modificada pelo JavaScript"
    card.style.color = "#ffffff"
    card.style.fontSize = '12px'
})

function personalizarBotao (card){
    card.style.padding = '5%'
    card.style.border = 'none'
    card.style.color= '#ffffff'
    card.style.borderRadius = "10px"
}



botaoEditar.forEach((card) => {
    personalizarBotao(card)
    card.style.backgroundColor = '#008000'
})

botaoDeletar.forEach((card) => {
    personalizarBotao(card)
    card.style.backgroundColor = '#FF0000'
})

// --cor azul - #2B385B 
//  -- cor laranja - #E16E0E
// veremelho - #FF0000
// verede - #008000

// questoa 7, foi onde parei
