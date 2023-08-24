const formularioCadastro = document.getElementById("formularioCadastro");

formularioCadastro.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  axios
    .post("https://api-recados-fnzo.onrender.com/cadastrar-usuario", {
      nome: name,
      email: email,
      senha: password,
    })
    .then(function (param) {
      alert(param.data);
    })
    .catch(function (param) {
      alert("Erro ao cadastrar usuario");
      alert(param.response.data);
    });
});



