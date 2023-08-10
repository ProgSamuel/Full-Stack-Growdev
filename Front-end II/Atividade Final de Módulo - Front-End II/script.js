const apiUrl = "https://rickandmortyapi.com/api/";
const campoBusca = document.getElementById("campoBusca");
const resultado = document.getElementById("resultado");
const opcoesBusca = document.getElementById("opcoesBusca");

axios.get(apiUrl + "character")
    .then(response => {
        const quantidadePersonagens = response.data.info.count;
        const nper = document.getElementById('nper')
        nper.innerHTML=`${quantidadePersonagens}`
    })
    .catch(error => {
        console.error("Erro ao obter quantidade de personagens:", error);
    });

axios.get(apiUrl + "location")
    .then(response => {
        const quantidadeLocalizacoes = response.data.info.count;
        const nloc = document.getElementById('nloc')
        nloc.innerHTML = `${quantidadeLocalizacoes}`
    })
    .catch(error => {
        console.error("Erro ao obter quantidade de localizações:", error);
    });

    axios.get(apiUrl + "episode")
    .then(response => {
        const quantidadeEpisodios = response.data.info.count;
        const nep = document.getElementById('nep')
        nep.innerHTML = `${quantidadeEpisodios}`
    })
    .catch(error => {
        console.error("Erro ao obter quantidade de episódios:", error);
    });


async function buscarNomeUltimoEpisodio(urlEpisodio) {
  try {
    const response = await axios.get(urlEpisodio);
    const ultimoEpisodio = response.data;
    return ultimoEpisodio.name;
  } catch (error) {
    console.error("Erro ao obter detalhes do último episódio:", error);
    return "Erro ao obter detalhes do episódio";
  }
}

async function mostrarPersonagem(personagem) {
  const ultimoEpisodioName = await buscarNomeUltimoEpisodio(
    personagem.episode[personagem.episode.length - 1]
  );

  resultado.innerHTML = `
        <h2>${personagem.name}</h2>
        <p>${personagem.status} - ${personagem.species}</p>
        <p>Última localização conhecida:<br>${personagem.location.name}</p>
        <p>Visto pela última vez em:<br>${ultimoEpisodioName}</p>
        <img src="${personagem.image}" alt="${personagem.name}">
    `;
}

function buscarPersonagem(nome) {
  axios
    .get(apiUrl + "character", {
      params: { name: nome },
    })
    .then((response) => {
      const personagens = response.data.results;

      if (personagens.length > 0) {
        mostrarPersonagem(personagens[0]);
      } else {
        resultado.innerHTML = "Personagem não encontrado.";
      }

      exibirOpcoesBusca(personagens);
    })
    .catch((error) => {
      console.error("Erro ao buscar personagem:", error);
      resultado.innerHTML = "Ocorreu um erro ao buscar o personagem.";
    });
}

function exibirOpcoesBusca(personagens) {
  opcoesBusca.innerHTML = "";
  personagens.forEach((personagem) => {
    const opcao = document.createElement("div");
    opcao.textContent = personagem.name;
    opcao.classList.add("opcao-busca");
    opcao.addEventListener("click", () => {
      campoBusca.value = personagem.name;
      buscarPersonagem(personagem.name);
    });
    opcoesBusca.appendChild(opcao);
  });
}

campoBusca.addEventListener("input", () => {
  const nomePersonagem = campoBusca.value.trim();
  if (nomePersonagem !== "") {
    buscarPersonagem(nomePersonagem);
  } else {
    opcoesBusca.innerHTML = "";
    resultado.innerHTML = "";
  }
});
