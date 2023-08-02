const formularioLogin = document.getElementById("formularioLogin");

formularioLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  axios
    .post("https://api-recados-fnzo.onrender.com/login/", {
      email: email,
      senha: password,
    })
    .then(function (param) {
      console.log("Login successful!");
      window.location.href = "./recados.html";
    })
    .catch(function (param) {
      console.log(param);
      alert(`
        Failed to login! 
        ${param.response.data}`);
    });
});
