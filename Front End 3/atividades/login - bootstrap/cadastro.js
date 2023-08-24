const formularioCadastro = document.getElementById('formularioCadastro');
const retorno = document.getElementById('retorno');
const button = document.querySelector('#envio');

console.log('chegou'); // Corregí la palabra "chgou" a "chegou"

formularioCadastro.addEventListener('submit', function (e) {
  e.preventDefault();

  button.innerHTML = `Loading...  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>`;
  button.disabled = true;

  // Obtén los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log(name, email, password); // Muestra los valores en la consola

  axios
    .post('https://api-recados-fnzo.onrender.com/cadastrar-usuario', {
      nome: name,
      email: email,
      senha: password,
    })
    .then(function (response) {
      button.innerHTML = `Submit`;
      button.disabled = false;
      console.log(response);
      console.log(response.status);
      return (retorno.innerHTML = `<div class="alert alert-success mt-2" role="alert"> ${response.data} </div>`);
    })
    .catch(function (error) {
      button.innerHTML = `Submit`;
      button.disabled = false;
      console.log(error.response.status);
      return (retorno.innerHTML = `<div class="alert alert-danger mt-2" role="alert">  ${error.response.data}</div>`);
    });
});
