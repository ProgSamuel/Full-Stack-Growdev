// RECEITAS

const base = document.getElementById("valor_base");
const transporte = document.getElementById("valor_transporte");
const alimentacao = document.getElementById("valor_alimentacao");
const receita = document.getElementById("valor_receita");

function somarReceita() {
  const valor1 = parseFloat(base.value) || 0;
  const valor2 = parseFloat(transporte.value) || 0;
  const valo3 = parseFloat(alimentacao.value) || 0;
  var soma = valor1 + valor2 + valo3;
  return (receita.value = soma);
}

base.addEventListener("blur", somarReceita);
transporte.addEventListener("blur", somarReceita);
alimentacao.addEventListener("blur", somarReceita);

//DESCONTOS
const automovel = document.getElementById("valor_automovel");
const faltas = document.getElementById("faltas");
const descontos = document.getElementById("valor_descontos");

function somarDescontos() {
  const valor1 = parseFloat(automovel.value) || 0;
  const valor2 = parseFloat(faltas.value) || 0;
  var valorADescontar = valor1 + valor2;
  return (descontos.value = valorADescontar.toFixed(2));
}

automovel.addEventListener("blur", somarDescontos);
faltas.addEventListener("blur", somarDescontos);

// TOTAL
const total = document.getElementById("valor_total");

function calcularTotal() {
  const totalReceita = parseFloat(receita.value) || 0;
  const totalDescontos = parseFloat(descontos.value) || 0;
  const totalFinal = totalReceita - totalDescontos;
  total.value = totalFinal.toFixed(2);
}

base.addEventListener('blur', calcularTotal);
transporte.addEventListener('blur', calcularTotal);
alimentacao.addEventListener('blur', calcularTotal);
automovel.addEventListener('blur', calcularTotal);
faltas.addEventListener('blur', calcularTotal);