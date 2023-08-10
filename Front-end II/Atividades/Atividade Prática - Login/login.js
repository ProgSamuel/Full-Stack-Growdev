
const formularioLogin = document.getElementById("formularioLogin");

formularioLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log( email, password);

  axios
    .post("https://api-recados-fnzo.onrender.com/login/", {
      email: email,
      senha: password,
    })
    .then(function (param) {
      // enviar userId para o localstorage
      // localStorage.setItem("idUsuario", param.data.idUsuario);
      console.log("Login successful!");
      console.log(param.data.idUsuario);

      window.location.href = "./recados.html";
    })
    .catch(function (param) {
      console.log(param);
      alert(`
        Failed to login! 
        ${param.response.data}`);
    });
});
