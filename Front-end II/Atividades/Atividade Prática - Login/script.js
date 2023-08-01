const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const url = "https://api-recados-fnzo.onrender.com/login/10";
  const dataToSend = { "email": email , "senha": password };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  })
    .then((response) => response.json.parse)
    .then((data) => {
      console.log(dataToSend)
      if (data === "Login efetuado com sucesso") {
        console.log("Login bem-sucedido!");
      } else {
        console.log("Falha no login. Verifique suas credenciais.");
      }
    })
    .catch((error) => console.error("Erro durante a requisição:", error));
});
