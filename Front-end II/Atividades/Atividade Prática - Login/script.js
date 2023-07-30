const formulario = document.getElementById("formulario");

fetch("https://api-recados-fnzo.onrender.com/")
  .then((response) => response.json())
  .then((data) => preencherEstados(data));

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  // Aqui você pode fazer a validação dos campos, verificar credenciais, etc.

  console.log(`${email} ${password}`);
});
