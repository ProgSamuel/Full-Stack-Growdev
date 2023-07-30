function preencherEstados(estados) {
  const selectEstados = document.getElementById("estados");
  selectEstados.innerHTML =
    '<option value="" selected disabled>Selecione um estado</option>';

  estados.sort((a, b) => a.nome.localeCompare(b.nome)); 

  estados.forEach((estado) => {
    const option = document.createElement("option");
    option.value = estado.sigla;
    option.textContent = estado.nome;
    selectEstados.appendChild(option);
  });
}

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then((response) => response.json())
  .then((data) => preencherEstados(data));

const dadosDoFormulario = []

// DADOS PESSOAIS
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estados").value;

// DADOS PROFISSIONAIS
const cargo = document.getElementById("naturCargo").value
const areaDeInteresse = document.getElementById("area").value
const curriculo = document.getElementById("miniCurriculo").value

const informacoes = `
Nome: ${nome}
Endereço: ${endereco}
Cidade: ${cidade}
Estado: ${estado}
Natureza do cargo: ${cargo}
Área de Interesse: ${areaDeInteresse}
Mini-curriculo: ${curriculo}`

console.log(informacoes);

dadosDoFormulario.push(informacoes)

console.log(`\n ${dadosDoFormulario}`);

const dadosConvertidos = JSON.stringify(dadosDoFormulario);        
localStorage.setItem("dadosDoFormulario", dadosConvertidos);

alert("Dados salvos com sucesso!");

});




