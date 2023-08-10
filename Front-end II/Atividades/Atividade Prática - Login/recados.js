const recadosContainer = document.getElementById("recados-container");

async function fetchRecados(idUsuario, page) {
  const apiUrl = `https://api-recados-fnzo.onrender.com/recados/${idUsuario}?page=${page}`;
  
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar recados:", error);
    return null;
  }
}

async function exibirRecados(idUsuario, page) {
  const recados = await fetchRecados(idUsuario, page);

  if (!recados) {
    recadosContainer.innerHTML = "Erro ao buscar recados.";
    return;
  }

  const recadosList = recados.recados
    .map((recado) => `<li>${recado.idRecado} - ${recado.titulo} - ${recado.descricao}</li>`)
    .join(""); // Use .join("") para transformar o array em uma única string

    identificador = parseInt(recados.idUsuario);

    recadosContainer.innerHTML = `
    <ul>${recadosList ||  "Não há recados aqui!"}</ul>

    <p> O seu ID é${identificador} </p>
    <div  class="pe">
    <button onclick="prevPage(${recados.pagina_atual - 1})" ${recados.pagina_atual === 1 ? 'disabled' : ''}> Página anterior</button>
    <p>Página ${recados.pagina_atual} de ${recados.total_paginas}</p>
    <button onclick="proxPage(${recados.pagina_atual + 1})"> Próxima página</button>
</div>
  
  `;

    //BUCAR LOCALSTORAGE
    let quero = localStorage.getItem("RESPOSTA", param.data);
    console.log(quero);
}

// Função para avançar para a próxima página
function proxPage(page) {
  exibirRecados(idUsuario, page);
}

// Função para voltar para a página anterior
function prevPage(page) {
  exibirRecados(idUsuario, page);
}

const idUsuario = 10;
const page = 1;

exibirRecados(idUsuario, page);
