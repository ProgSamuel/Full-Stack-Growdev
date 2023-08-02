const formularioCadastro = document.getElementById("formularioCadastro");

formularioCadastro.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = e.target.email.value;
  const password = e.target.password.value;


  axios.post('https://api-recados-fnzo.onrender.com/cadastrar-usuario', {
        nome: name,
        email: email,
        senha: password,
      })
      .then(function (param) {
        console.log(param)
        alert('Usuario cadastrado com sucesso')
      }).catch(function (param) {
        console.log(param)
        alert('Erro ao cadastrar usuario')
        alert(param.response.data)
      })
});
