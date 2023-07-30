const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  // Aqui você pode fazer a validação dos campos, verificar credenciais, etc.

  console.log(`${email} ${password}`);
});
