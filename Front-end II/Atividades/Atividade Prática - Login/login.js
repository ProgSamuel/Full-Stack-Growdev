const formularioLogin = document.getElementById("formularioLogin");

formularioLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // const dataToSend = { "email": email , "senha": password };

      axios.post('https://api-recados-fnzo.onrender.com/login/', {
        email: email,
        senha: password,
      })
      .then(function (param) {
        alert('Login successful!')
      }).catch(function (param) {
        console.log(param)
        alert(`
        Failed to login! 
        ${param.response.data}`)
      })
});


