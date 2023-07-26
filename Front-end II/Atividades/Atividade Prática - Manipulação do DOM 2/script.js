/* 
// Capturar todos os elementos de classe "card"
const cards = document.querySelectorAll('.card');

function adicionarBordaBotaoCard(botoes) {
    botoes.forEach((botao) => {
      botao.style.border = '2px solid #000000'; // Cor e espessura da borda da classe "card"
      botao.style.borderRadius = '30px'; // Raio de borda da classe "card"
      botao.style.backgroundColor = '#ffffff'; // Cor de fundo da classe "card"
      botao.style.color = '#000000'; // Cor do texto da classe "card"
      botao.style.padding = '8px 16px'; // Espaçamento interno do botão
      botao.style.cursor = 'pointer'; // Mostrar um cursor de mão quando o mouse passa sobre o botão
    });
  }

// Iterar sobre os elementos capturados e modificar os estilos para a cor laranja
cards.forEach((card) => {
  card.style.backgroundColor = '#E16E0E';

  // Capturar e modificar o estilo do botão "Editar" (cor verde)
  const botaoEditar = card.querySelector('.botao-editar');
  botaoEditar.style.backgroundColor = '#008000';
  adicionarBordaBotaoCard(botoesEditar);
  
  // Capturar e modificar o estilo do botão "Deletar" (cor vermelha)
  const botaoDeletar = card.querySelector('.botao-apagar');
  botaoDeletar.style.backgroundColor = '#FF0000';
  adicionarBordaBotaoCard(botoesApagar);
});

// Capturar todos os elementos de classe "titulo-card"
const titulosCards = document.querySelectorAll('.titulo-card');

// Iterar sobre os elementos capturados e modificar os estilos para a cor #273252
titulosCards.forEach((tituloCard) => {
  tituloCard.style.color = '#273252';
  tituloCard.textContent = 'Meu card';
});

// Capturar todos os elementos de classe "descricao-card"
const descricoesCards = document.querySelectorAll('.descricao-card');

// Iterar sobre os elementos capturados e modificar os estilos
descricoesCards.forEach((descricaoCard) => {
  // Modificar o estilo para a cor branca (#ffffff)
  descricaoCard.style.color = '#ffffff';

  // Modificar o texto para "Descrição modificada pelo JavaScript"
  descricaoCard.textContent = 'Descrição modificada pelo JavaScript';

  // Modificar a fonte para diminuir o tamanho (por exemplo, 14px)
  descricaoCard.style.fontSize = '12px';

  // Alinhar o texto verticalmente ao centro
  descricaoCard.style.display = 'flex';
  descricaoCard.style.alignItems = 'center';
  descricaoCard.style.justifyContent = 'center';
});

 */