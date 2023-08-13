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

function editarRecado(idRecado) {
  alert(`Editar recado com ID ${idRecado}`);
}

function excluirRecado(idRecado) {
  alert(`Excluir recado com ID ${idRecado}`);
}

async function exibirRecados(idUsuario, page) {
  const recados = await fetchRecados(idUsuario, page);

  if (!recados) {
    recadosContainer.innerHTML = "Erro ao buscar recados.";
    return;
  }

  const recadosList = recados.recados
    .map(
      (recado) =>
        `<li>${recado.idRecado} - ${recado.titulo} - ${recado.descricao}
      <div class="botoes">
         <button id="btn-edit-recado" onclick="errands()" onclick="editarRecado(${recado.idRecado})">Editar</button>
         <button id="btn-delete-recado" onclick="errands()" onclick="excluirRecado(${recado.idRecado})">Excluir</button>
         </div>
       </li>`
    )
    .join("");

  if (recadosList.length === 0) {
    recadosContainer.innerHTML = `<ul> <li>Não há recados aqui!</li> </ul>
      <div class="id_e_add">
      <div> <p> O seu ID é o <strong> ${idUsuario} </strong> </p>  </div>
      <div>   <button id="btn-add-recado" onclick="errands()">Adicionar Recado</button> </div>
          </div>
        <div class="pe">
        <button onclick="prevPage(${recados.pagina_atual - 1})" ${
      recados.pagina_atual === 1 ? "disabled" : ""
    }> < </button>
        <p>Página ${recados.pagina_atual}</p>
        <button onclick="proxPage(${recados.pagina_atual + 1})"> > </button>
      </div>`;
    return;
  } else {
    recadosContainer.innerHTML = `
      <ul>${recadosList}</ul>
      <div class="id_e_add">
  <div> <p> O seu ID é o <strong> ${idUsuario} </strong> </p>  </div>
  <div>   <button id="btn-add-recado" onclick="errands()">Adicionar Recado</button> </div>
      </div>
     
      <div class="pe">
        <button onclick="prevPage(${recados.pagina_atual - 1})" ${
      recados.pagina_atual === 1 ? "disabled" : ""
    }> < </button>
        <p>Página ${recados.pagina_atual}</p>
        <button onclick="proxPage(${recados.pagina_atual + 1})"> > </button>
      </div>
    `;
  }
}

function proxPage(page) {
  exibirRecados(idUsuario, page);
}

function prevPage(page) {
  exibirRecados(idUsuario, page);
}

const idUsuario = localStorage.getItem("userId");

const page = 1;

exibirRecados(idUsuario, page);

function errands() {
  window.location.href = "./construção.html";
}
