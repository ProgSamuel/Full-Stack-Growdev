function salvarLocalStorage(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

function acessarLocalStorage(chave) {
  const dados = localStorage.getItem(chave);

  if (dados) {
    return JSON.parse(dados);
  }

  return false;
}

function checkUsuarioLogado() {
  const usuario = acessarLocalStorage("usuario-logado");

  if (!usuario) {
    window.location.href = "./index.html";
  }
}

async function buscarRecados() {
  try {
    const { data } = await axios.get("http://localhost:5555/recados");

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

checkUsuarioLogado();
buscarRecados();
